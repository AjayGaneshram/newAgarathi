import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: "autoUpdate", // ✅ Auto-update service worker when new content is available
    workbox: {
      cleanupOutdatedCaches: true, // ✅ Remove old caches
      clientsClaim: true, // ✅ Take control of uncontrolled clients
      skipWaiting: true, // ✅ Activate SW immediately
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/ajayganeshram\.github\.io\/newAgarathi\/assets\/.*\.(js|css|png|jpg|svg|woff2?)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "static-assets",
            expiration: { maxAgeSeconds: 60 * 60 * 24 * 365 * 2 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: /^https:\/\/ajayganeshram\.github\.io\/newAgarathi\/.*\.(js|css|png|jpg|svg|woff2?)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "static-assets",
            expiration: { maxAgeSeconds: 60 * 60 * 24 * 365 * 2 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
      ],
    },
    strategies: "generateSW", // ✅ Automatically generates the service worker
    manifest: {
      short_name: "அகராதி",
      name: "new Agarathi App",
      icons: [],
      start_url: "/newAgarathi/",
      display: "standalone",
      theme_color: "#ffffff",
      background_color: "#ffffff",
    },
    // ✅ Detects a new update and triggers an event
    devOptions: { enabled: true },
  }),
  ],
  base: "/newAgarathi/",
  css: {
    postcss: { plugins: [tailwindcss()] },
  },
  build: {
    outDir: "dist",
    charset: "utf-8",
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      }
    },
    assetsInlineLimit: 0,
    rollupOptions: {
      input: { main: "index.html" },
      output: {
        chunkFileNames: "assets/chunks/[name].[hash].js",  // Optimized chunk names
        entryFileNames: "assets/[name].[hash].js",        // Optimized entry file names
        assetFileNames: "assets/[name].[hash].[ext]",     // Keep hashed asset names
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Separate vendor files for better caching
          }
        },
      },
    },
  },
})
