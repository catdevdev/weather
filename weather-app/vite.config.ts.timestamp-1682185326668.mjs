// vite.config.ts
import path from "path";
import react from "file:///Users/catdev/pr/weather/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///Users/catdev/pr/weather/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "/Users/catdev/pr/weather/weather-app";
var vite_config_default = defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020"
    }
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" }
  },
  resolve: {
    alias: {
      "@app": path.resolve(__vite_injected_original_dirname, "./src/app"),
      "@pages": path.resolve(__vite_injected_original_dirname, "./src/pages"),
      "@widgets": path.resolve(__vite_injected_original_dirname, "./src/widgets"),
      "@features": path.resolve(__vite_injected_original_dirname, "./src/features"),
      "@entities": path.resolve(__vite_injected_original_dirname, "./src/entities"),
      "@shared": path.resolve(__vite_injected_original_dirname, "./src/shared")
    }
  },
  plugins: [
    react({
      babel: {
        plugins: [
          "babel-plugin-macros",
          [
            "@emotion/babel-plugin-jsx-pragmatic",
            {
              export: "jsx",
              import: "__cssprop",
              module: "@emotion/react"
            }
          ],
          [
            "@babel/plugin-transform-react-jsx",
            { pragma: "__cssprop" },
            "twin.macro"
          ]
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2F0ZGV2L3ByL3dlYXRoZXIvd2VhdGhlci1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jYXRkZXYvcHIvd2VhdGhlci93ZWF0aGVyLWFwcC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2F0ZGV2L3ByL3dlYXRoZXIvd2VhdGhlci1hcHAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgdGFyZ2V0OiAnZXMyMDIwJyxcbiAgICB9LFxuICB9LFxuICBlc2J1aWxkOiB7XG4gICAgbG9nT3ZlcnJpZGU6IHsgJ3RoaXMtaXMtdW5kZWZpbmVkLWluLWVzbSc6ICdzaWxlbnQnIH0sXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0BhcHAnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvYXBwJyksXG4gICAgICAnQHBhZ2VzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3BhZ2VzJyksXG4gICAgICAnQHdpZGdldHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvd2lkZ2V0cycpLFxuICAgICAgJ0BmZWF0dXJlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9mZWF0dXJlcycpLFxuICAgICAgJ0BlbnRpdGllcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9lbnRpdGllcycpLFxuICAgICAgJ0BzaGFyZWQnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc2hhcmVkJyksXG4gICAgfSxcbiAgfSxcblxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3Qoe1xuICAgICAgYmFiZWw6IHtcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICdiYWJlbC1wbHVnaW4tbWFjcm9zJyxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAnQGVtb3Rpb24vYmFiZWwtcGx1Z2luLWpzeC1wcmFnbWF0aWMnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBleHBvcnQ6ICdqc3gnLFxuICAgICAgICAgICAgICBpbXBvcnQ6ICdfX2Nzc3Byb3AnLFxuICAgICAgICAgICAgICBtb2R1bGU6ICdAZW1vdGlvbi9yZWFjdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgJ0BiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLXJlYWN0LWpzeCcsXG4gICAgICAgICAgICB7IHByYWdtYTogJ19fY3NzcHJvcCcgfSxcbiAgICAgICAgICAgICd0d2luLm1hY3JvJyxcbiAgICAgICAgICBdLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThSLE9BQU8sVUFBVTtBQUUvUyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFIN0IsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsY0FBYztBQUFBLElBQ1osZ0JBQWdCO0FBQUEsTUFDZCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLGFBQWEsRUFBRSw0QkFBNEIsU0FBUztBQUFBLEVBQ3REO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxRQUFRLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDM0MsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQy9DLFlBQVksS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUNuRCxhQUFhLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUNyRCxhQUFhLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUNyRCxXQUFXLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUEsUUFDTCxTQUFTO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLGNBQ0UsUUFBUTtBQUFBLGNBQ1IsUUFBUTtBQUFBLGNBQ1IsUUFBUTtBQUFBLFlBQ1Y7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBLEVBQUUsUUFBUSxZQUFZO0FBQUEsWUFDdEI7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
