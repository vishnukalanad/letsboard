import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  optimizeDeps: {
    include: ['@syncfusion/ej2-base']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
