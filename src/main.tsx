import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { registerSW } from 'virtual:pwa-register'

const intervalMS = 1 * 60 * 1000

const updateSW = registerSW({
  onRegisteredSW(swUrl, r) {
	console.log('SW Registered: ' + r);
    r && setInterval(async () => {
      if (!(!r.installing && navigator))
        return

      if (('connection' in navigator) && !navigator.onLine)
        return

      const resp = await fetch(swUrl, {
        cache: 'no-store',
        headers: {
          'cache': 'no-store',
          'cache-control': 'no-cache',
        },
      })

      if (resp?.status === 200)
        await r.update()
    }, intervalMS)
  }
})

updateSW();

const rootElement = document.getElementById("root");
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
} else {
	console.error("Root element not found");
}
