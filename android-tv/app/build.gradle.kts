plugins {
  id("com.android.application")
  id("org.jetbrains.kotlin.android")
}

fun String.escapeForBuildConfig(): String = replace("\\", "\\\\").replace("\"", "\\\"")

val defaultHakUrl = ((findProperty("hakBaseUrl") as String?) ?: "").trim()

android {
  namespace = "com.zoryas.hakki.tv"
  compileSdk = 36

  defaultConfig {
    applicationId = "com.zoryas.hakki.tv"
    minSdk = 24
    targetSdk = 34
    versionCode = 1
    versionName = "1.0.0"
    buildConfigField("String", "DEFAULT_WEB_APP_URL", "\"${defaultHakUrl.escapeForBuildConfig()}\"")
  }

  buildFeatures {
    buildConfig = true
    viewBinding = true
  }

  buildTypes {
    release {
      isMinifyEnabled = false
      proguardFiles(
        getDefaultProguardFile("proguard-android-optimize.txt"),
        "proguard-rules.pro"
      )
    }
  }

  compileOptions {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
  }

  kotlinOptions {
    jvmTarget = "17"
  }

  packaging {
    resources {
      excludes += "/META-INF/{AL2.0,LGPL2.1}"
    }
  }
}

dependencies {
  implementation("androidx.core:core-ktx:1.15.0")
  implementation("androidx.appcompat:appcompat:1.7.0")
  implementation("androidx.activity:activity-ktx:1.9.3")
  implementation("androidx.webkit:webkit:1.12.1")
  implementation("com.google.android.material:material:1.12.0")
}

