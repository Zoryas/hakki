package com.zoryas.hakki.tv

import android.annotation.SuppressLint
import android.graphics.Color
import android.content.SharedPreferences
import android.net.Uri
import android.os.Bundle
import android.view.KeyEvent
import android.view.View
import android.view.WindowManager
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.core.view.isVisible
import com.zoryas.hakki.tv.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
  private lateinit var binding: ActivityMainBinding
  private val preferences by lazy { getSharedPreferences(PREFERENCES_NAME, MODE_PRIVATE) }

  private var activeUrl = ""
  private var lastLoadFailed = false

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    enableEdgeToEdge()
    WindowCompat.setDecorFitsSystemWindows(window, false)
    window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

    binding = ActivityMainBinding.inflate(layoutInflater)
    setContentView(binding.root)

    configureWindow()
    configurePanel()
    configureWebView()
    loadConfiguredUrl()
  }

  override fun onWindowFocusChanged(hasFocus: Boolean) {
    super.onWindowFocusChanged(hasFocus)
    if (hasFocus) enterImmersiveMode()
  }

  override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
    if (keyCode == KeyEvent.KEYCODE_MENU) {
      showConfigPanel(
        if (activeUrl.isBlank()) {
          "Enter the URL of the device running the HAK server."
        } else {
          "Update the server URL, then choose Save and Open."
        }
      )
      return true
    }

    if (keyCode == KeyEvent.KEYCODE_BACK && binding.configOverlay.isVisible) {
      if (activeUrl.isNotBlank() && !lastLoadFailed) {
        hideConfigPanel()
      }
      return true
    }

    if (keyCode == KeyEvent.KEYCODE_BACK && binding.webView.canGoBack()) {
      binding.webView.goBack()
      return true
    }

    return super.onKeyDown(keyCode, event)
  }

  override fun onDestroy() {
    binding.webView.destroy()
    super.onDestroy()
  }

  private fun configureWindow() {
    window.navigationBarColor = Color.BLACK
    window.statusBarColor = Color.BLACK
    enterImmersiveMode()
  }

  private fun enterImmersiveMode() {
    WindowInsetsControllerCompat(window, binding.root).apply {
      hide(WindowInsetsCompat.Type.systemBars())
      systemBarsBehavior = WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
    }
  }

  private fun configurePanel() {
    binding.defaultButton.isVisible = BuildConfig.DEFAULT_WEB_APP_URL.isNotBlank()
    binding.defaultButton.setOnClickListener {
      val defaultUrl = normalizeUrl(BuildConfig.DEFAULT_WEB_APP_URL)
      if (defaultUrl.isBlank()) {
        updateStatus("No default server URL was baked into this build.")
        return@setOnClickListener
      }

      binding.urlInput.setText(defaultUrl)
      persistAndLoadUrl()
    }

    binding.saveButton.setOnClickListener {
      persistAndLoadUrl()
    }

    binding.retryButton.setOnClickListener {
      val candidate = normalizeUrl(binding.urlInput.text?.toString().orEmpty()).ifBlank {
        normalizeUrl(activeUrl)
      }

      if (candidate.isBlank()) {
        updateStatus("Enter a valid server URL first.")
        binding.urlInput.requestFocus()
        return@setOnClickListener
      }

      loadUrl(candidate, remember = false)
    }
  }

  @SuppressLint("SetJavaScriptEnabled")
  private fun configureWebView() {
    with(binding.webView) {
      setBackgroundColor(Color.BLACK)
      isFocusable = true
      isFocusableInTouchMode = true
      overScrollMode = View.OVER_SCROLL_NEVER

      settings.javaScriptEnabled = true
      settings.domStorageEnabled = true
      settings.databaseEnabled = true
      settings.mediaPlaybackRequiresUserGesture = false
      settings.loadsImagesAutomatically = true
      settings.useWideViewPort = true
      settings.loadWithOverviewMode = true
      settings.allowContentAccess = true
      settings.allowFileAccess = false
      settings.cacheMode = WebSettings.LOAD_DEFAULT
      settings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
      settings.userAgentString = "${settings.userAgentString} HAKAndroidTV/1.0"

      addJavascriptInterface(HakkiNativeStorageBridge(preferences), "HakkiNativeStorage")
      webChromeClient = WebChromeClient()
      webViewClient = object : WebViewClient() {
        override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
          val scheme = request?.url?.scheme?.lowercase().orEmpty()
          return scheme.isNotBlank() && scheme != "http" && scheme != "https"
        }

        override fun onPageStarted(view: WebView?, url: String?, favicon: android.graphics.Bitmap?) {
          lastLoadFailed = false
          updateStatus("Opening ${url ?: activeUrl}")
        }

        override fun onPageFinished(view: WebView?, url: String?) {
          if (lastLoadFailed) return
          activeUrl = url ?: activeUrl
          updateStatus("Connected to $activeUrl")
          hideConfigPanel()
          binding.webView.requestFocus()
        }

        override fun onReceivedError(
          view: WebView?,
          request: WebResourceRequest?,
          error: WebResourceError?
        ) {
          if (request?.isForMainFrame != true) return
          lastLoadFailed = true
          showConfigPanel("Couldn't load the app from ${request.url}. Check the server URL and that your HAK server is running.")
        }

        override fun onReceivedHttpError(
          view: WebView?,
          request: WebResourceRequest?,
          errorResponse: WebResourceResponse?
        ) {
          if (request?.isForMainFrame != true) return
          lastLoadFailed = true
          showConfigPanel("The server responded with HTTP ${errorResponse?.statusCode ?: 0}. Check the URL and try again.")
        }
      }
    }
  }

  private fun loadConfiguredUrl() {
    val savedUrl = preferences.getString(KEY_SERVER_URL, "").orEmpty()
    val candidate = normalizeUrl(savedUrl.ifBlank { BuildConfig.DEFAULT_WEB_APP_URL })

    if (candidate.isBlank()) {
      showConfigPanel("Enter the LAN URL of the device running the HAK server. Example: http://192.168.1.23:4100")
      return
    }

    binding.urlInput.setText(candidate)
    loadUrl(candidate, remember = false)
  }

  private fun persistAndLoadUrl() {
    val normalized = normalizeUrl(binding.urlInput.text?.toString().orEmpty())
    if (normalized.isBlank()) {
      updateStatus("Enter a valid http:// or https:// URL.")
      binding.urlInput.requestFocus()
      return
    }

    preferences.edit().putString(KEY_SERVER_URL, normalized).apply()
    loadUrl(normalized, remember = false)
  }

  private fun loadUrl(url: String, remember: Boolean) {
    val normalized = normalizeUrl(url)
    if (normalized.isBlank()) {
      updateStatus("Enter a valid server URL first.")
      return
    }

    if (remember) {
      preferences.edit().putString(KEY_SERVER_URL, normalized).apply()
    }

    activeUrl = normalized
    lastLoadFailed = false
    updateStatus("Opening $normalized")
    binding.webView.loadUrl(normalized)
    binding.webView.requestFocus()
  }

  private fun showConfigPanel(message: String) {
    binding.panelMessage.text = message
    binding.configOverlay.isVisible = true
    updateStatus(message)
    binding.urlInput.post {
      binding.urlInput.requestFocus()
      binding.urlInput.setSelection(binding.urlInput.text?.length ?: 0)
    }
  }

  private fun hideConfigPanel() {
    binding.configOverlay.isVisible = false
  }

  private fun updateStatus(message: String) {
    binding.statusText.text = message
  }

  private fun normalizeUrl(rawValue: String): String {
    val trimmed = rawValue.trim()
    if (trimmed.isBlank()) return ""

    val withScheme = if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      trimmed
    } else {
      "http://$trimmed"
    }

    return try {
      val uri = Uri.parse(withScheme)
      if (uri.scheme.isNullOrBlank() || uri.host.isNullOrBlank()) {
        ""
      } else {
        ensureTvMode(uri).toString()
      }
    } catch (_error: Throwable) {
      ""
    }
  }

  private fun ensureTvMode(uri: Uri): Uri {
    if (uri.getQueryParameter("tv") != null) return uri

    return uri.buildUpon()
      .appendQueryParameter("tv", "1")
      .build()
  }

  companion object {
    private const val PREFERENCES_NAME = "hakki_android_tv"
    private const val KEY_SERVER_URL = "server_url"
  }
}
private class HakkiNativeStorageBridge(
  private val storage: SharedPreferences
) {
  @JavascriptInterface
  fun getItem(key: String?): String {
    val normalized = normalizeKey(key) ?: return ""
    return storage.getString(normalized, "") ?: ""
  }

  @JavascriptInterface
  fun setItem(key: String?, value: String?) {
    val normalized = normalizeKey(key) ?: return
    storage.edit().putString(normalized, value ?: "").apply()
  }

  @JavascriptInterface
  fun removeItem(key: String?) {
    val normalized = normalizeKey(key) ?: return
    storage.edit().remove(normalized).apply()
  }

  private fun normalizeKey(key: String?): String? {
    val raw = key?.trim().orEmpty()
    if (raw.isBlank()) return null
    if (!raw.startsWith("hak:") && !raw.startsWith("arrwa:")) return null
    return "web-store:$raw"
  }
}
