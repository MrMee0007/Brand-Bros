// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),
//     tailwindcss(),
//   ],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: "#EF4444",
            "background-light": "#E5E1D8",
            "background-dark": "#121212",
          },
          fontFamily: {
            display: ["Oswald", "sans-serif"],
            sans: ["Inter", "sans-serif"],
          },
          borderRadius: {
            DEFAULT: "0px",
          },
        },
      },
    }),
  ],
});
