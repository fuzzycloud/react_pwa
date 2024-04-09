import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			// registerType: "autoUpdate",
			injectRegister: "auto",
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,json}'],
			  },
			devOptions: {
				enabled: true,
			},
		}),
	],
	base: "/react_pwa/",
});
