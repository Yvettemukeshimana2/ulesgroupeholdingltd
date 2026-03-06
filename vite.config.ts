 import { defineConfig } from "vite";
 import react from "@vitejs/plugin-react";
 

 export default defineConfig({
   plugins: [react()],
   css: {
     postcss: "./postcss.config.js",
   },
   build: {
     
       chunkSizeWarningLimit: 1000, // Set limit to 1000 kB
      
     rollupOptions: {
       output: {
         assetFileNames: "assets/[name]-[hash][extname]",
       },
     },
   },
 });
