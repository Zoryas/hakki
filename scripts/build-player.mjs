import fs from 'node:fs';
import { build } from 'esbuild';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

function patchReactTVPlayerSeek(source) {
  return source.replace(/X = h \/ 30/g, 'X = Math.max(1, Number(window.__HAK_SEEK_SECONDS__ || 10) || 10)');
}

await build({
  entryPoints: [path.join(projectRoot, 'src', 'player-app.jsx')],
  outfile: path.join(projectRoot, 'public', 'player-app.bundle.js'),
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['chrome96', 'edge96', 'safari15'],
  jsx: 'automatic',
  sourcemap: false,
  minify: false,
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  plugins: [
    {
      name: 'arrwa-react-tv-player-seek-patch',
      setup(buildContext) {
        buildContext.onLoad({ filter: /index-r8XrYpcu\.js$/ }, async (args) => {
          const source = await fs.promises.readFile(args.path, 'utf8');
          return {
            contents: patchReactTVPlayerSeek(source),
            loader: 'js',
          };
        });
      },
    },
  ],
});
