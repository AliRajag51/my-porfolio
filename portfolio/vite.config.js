import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    base: "/my-porfolio/", // 👈 Add this line (MUST match your repo name)

  plugins: [tailwindcss(), react()],
});
