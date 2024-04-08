if ("serviceWorker" in navigator)
	navigator.serviceWorker.register("/react_pwa/dev-sw.js?dev-sw", {
		scope: "/react_pwa/",
		type: "classic",
	});
