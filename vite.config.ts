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
			manifest: {
				name: "React PWA",
				short_name: "React PWA",
				theme_color: "#000000",
				background_color: "#ffffff",
				display: "standalone",
				start_url: ".",
				icons: [
					{
						src: "/pwa-64x64.png",
						sizes: "64x64",
						type: "image/png",
					},
					{
						src: "/pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
			devOptions: {
				enabled: true,
			},
		}),
	],
	base: "/react_pwa/",
});
