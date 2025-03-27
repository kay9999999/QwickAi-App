import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import postcss from "@tailwindcss/postcss"; // ✅ Correct import

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [postcss],
//     },
//   },
// });
