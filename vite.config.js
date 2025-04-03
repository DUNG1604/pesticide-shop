import { fileURLToPath, URL } from "node:url";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import removeConsole from "vite-plugin-remove-console";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), removeConsole(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  devServer: {
    headers: {
      "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate"
    }
  },
  productionSourceMap: false,
  envDir: './src/env',
});
