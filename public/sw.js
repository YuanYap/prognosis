if (!self.define) {
	let e,
		s = {}
	const a = (a, n) => (
		(a = new URL(a + ".js", n).href),
		s[a] ||
			new Promise((s) => {
				if ("document" in self) {
					const e = document.createElement("script")
					;(e.src = a), (e.onload = s), document.head.appendChild(e)
				} else (e = a), importScripts(a), s()
			}).then(() => {
				let e = s[a]
				if (!e) throw new Error(`Module ${a} didn’t register its module`)
				return e
			})
	)
	self.define = (n, c) => {
		const i =
			e ||
			("document" in self ? document.currentScript.src : "") ||
			location.href
		if (s[i]) return
		let t = {}
		const r = (e) => a(e, i),
			o = {module: {uri: i}, exports: t, require: r}
		s[i] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (c(...e), t))
	}
}
define(["./workbox-6316bd60"], function (e) {
	"use strict"
	importScripts(),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{
					url: "/_next/static/chunks/2dc05096-ef813f9e19a428a4.js",
					revision: "ef813f9e19a428a4"
				},
				{
					url: "/_next/static/chunks/3a2b0ac0-1abcadc5d6c938d7.js",
					revision: "1abcadc5d6c938d7"
				},
				{
					url: "/_next/static/chunks/414-ca94adcf58750056.js",
					revision: "ca94adcf58750056"
				},
				{
					url: "/_next/static/chunks/72acface-fd38b7d3c9417ed1.js",
					revision: "fd38b7d3c9417ed1"
				},
				{
					url: "/_next/static/chunks/873-448f26a421415a28.js",
					revision: "448f26a421415a28"
				},
				{
					url: "/_next/static/chunks/991-926af8dcfa60946c.js",
					revision: "926af8dcfa60946c"
				},
				{
					url: "/_next/static/chunks/ab5c09eb-849624f5db5e1d6d.js",
					revision: "849624f5db5e1d6d"
				},
				{
					url: "/_next/static/chunks/b1bb7d45-10bbc67e5ba674ae.js",
					revision: "10bbc67e5ba674ae"
				},
				{
					url: "/_next/static/chunks/framework-5f4595e5518b5600.js",
					revision: "5f4595e5518b5600"
				},
				{
					url: "/_next/static/chunks/main-bd10ba079f7ab4ba.js",
					revision: "bd10ba079f7ab4ba"
				},
				{
					url: "/_next/static/chunks/pages/404-ed97e0255d188016.js",
					revision: "ed97e0255d188016"
				},
				{
					url: "/_next/static/chunks/pages/_app-10480ccca4b447b9.js",
					revision: "10480ccca4b447b9"
				},
				{
					url: "/_next/static/chunks/pages/_error-1995526792b513b2.js",
					revision: "1995526792b513b2"
				},
				{
					url: "/_next/static/chunks/pages/about-791851a7136cf996.js",
					revision: "791851a7136cf996"
				},
				{
					url: "/_next/static/chunks/pages/cardiac-93374a7914106f2d.js",
					revision: "93374a7914106f2d"
				},
				{
					url: "/_next/static/chunks/pages/cardiac/result-1fb98522d7823361.js",
					revision: "1fb98522d7823361"
				},
				{
					url: "/_next/static/chunks/pages/diabetes-dd8c78c1361dcf95.js",
					revision: "dd8c78c1361dcf95"
				},
				{
					url: "/_next/static/chunks/pages/diabetes/result-0e83a39413da1b5e.js",
					revision: "0e83a39413da1b5e"
				},
				{
					url: "/_next/static/chunks/pages/hypertension-7602f37f3829245a.js",
					revision: "7602f37f3829245a"
				},
				{
					url: "/_next/static/chunks/pages/hypertension/result-07e1bbfa5f4c5cc6.js",
					revision: "07e1bbfa5f4c5cc6"
				},
				{
					url: "/_next/static/chunks/pages/index-47db0c3649fb96be.js",
					revision: "47db0c3649fb96be"
				},
				{
					url: "/_next/static/chunks/pages/melanoma-1c8e748cf601a13e.js",
					revision: "1c8e748cf601a13e"
				},
				{
					url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
					revision: "99442aec5788bccac9b2f0ead2afdd6b"
				},
				{
					url: "/_next/static/chunks/webpack-851c3983ee4bf085.js",
					revision: "851c3983ee4bf085"
				},
				{
					url: "/_next/static/css/1994a05348dc40c1.css",
					revision: "1994a05348dc40c1"
				},
				{
					url: "/_next/static/vA0tVYl-0ej3R4Ww8JFXb/_buildManifest.js",
					revision: "a26af7c7e99d033cb5a09c9bcfe0603a"
				},
				{
					url: "/_next/static/vA0tVYl-0ej3R4Ww8JFXb/_middlewareManifest.js",
					revision: "fb2823d66b3e778e04a3f681d0d2fb19"
				},
				{
					url: "/_next/static/vA0tVYl-0ej3R4Ww8JFXb/_ssgManifest.js",
					revision: "b6652df95db52feb4daf4eca35380933"
				},
				{url: "/about.png", revision: "1f5af124d43f1bc676ec6419c18e38f3"},
				{url: "/ai.png", revision: "a1250ac6ac67ea4d74a938a960548d77"},
				{url: "/cardiac.png", revision: "d0879f65e6a713344e590a90e1b9c425"},
				{url: "/diabetes.png", revision: "26249e0ec2b09057b5b64514d7c7d04d"},
				{url: "/favicon.ico", revision: "3f3f785906884fe8eaed819aec1b0216"},
				{url: "/hyper.png", revision: "7cd588df96703078d20d25cb751c54b7"},
				{
					url: "/icons/icon-128x128.png",
					revision: "1c6df988eefbb4f04283916450e5d0dd"
				},
				{
					url: "/icons/icon-144x144.png",
					revision: "89b962763ebef44a3e8dd5a7306fb378"
				},
				{
					url: "/icons/icon-152x152.png",
					revision: "7af1c5f755889ccec402e901e3d98d50"
				},
				{
					url: "/icons/icon-192x192.png",
					revision: "5ef8015f70bf6d10e5a6207f146fb12b"
				},
				{
					url: "/icons/icon-384x384.png",
					revision: "7b6912edd6eaa7bc018a68d3a1f71567"
				},
				{
					url: "/icons/icon-512x512.png",
					revision: "8d9c7193ac45da011b7b2a607637cfb3"
				},
				{
					url: "/icons/icon-72x72.png",
					revision: "c15efb3ed69f376daf08b895080e3641"
				},
				{
					url: "/icons/icon-96x96.png",
					revision: "840c3821e6d770323cefd35e74b864bc"
				},
				{url: "/manifest.json", revision: "b8985a97b8729d0a6682d6aff976bbe4"},
				{
					url: "/model/group1-shard1of4",
					revision: "80148d62c69ec0ab3dd0fb58e225470d"
				},
				{
					url: "/model/group1-shard2of4",
					revision: "69ac22836a8e65124e20a38d51bd70ca"
				},
				{
					url: "/model/group1-shard3of4",
					revision: "011f59da5f08c42d237892e526013d04"
				},
				{
					url: "/model/group1-shard4of4",
					revision: "7f497d69c3eeec0badfda6688904dedb"
				},
				{
					url: "/model/model.json",
					revision: "481f31b6a5b951005701f102c497ba08"
				},
				{url: "/skins.png", revision: "fbceb42b4cbadeaad558ccb3a859df6a"},
				{url: "/vercel.svg", revision: "4b4f1876502eb6721764637fe5c41702"}
			],
			{ignoreURLParametersMatching: []}
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			"/",
			new e.NetworkFirst({
				cacheName: "start-url",
				plugins: [
					{
						cacheWillUpdate: async ({
							request: e,
							response: s,
							event: a,
							state: n
						}) =>
							s && "opaqueredirect" === s.type
								? new Response(s.body, {
										status: 200,
										statusText: "OK",
										headers: s.headers
								  })
								: s
					}
				]
			}),
			"GET"
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: "google-fonts-webfonts",
				plugins: [
					new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 31536e3})
				]
			}),
			"GET"
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: "google-fonts-stylesheets",
				plugins: [
					new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800})
				]
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-font-assets",
				plugins: [
					new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800})
				]
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-image-assets",
				plugins: [
					new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400})
				]
			}),
			"GET"
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: "next-image",
				plugins: [
					new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400})
				]
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: "static-audio-assets",
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})
				]
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:mp4)$/i,
			new e.CacheFirst({
				cacheName: "static-video-assets",
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})
				]
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-js-assets",
				plugins: [
					new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})
				]
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-style-assets",
				plugins: [
					new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})
				]
			}),
			"GET"
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: "next-data",
				plugins: [
					new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})
				]
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: "static-data-assets",
				plugins: [
					new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})
				]
			}),
			"GET"
		),
		e.registerRoute(
			({url: e}) => {
				if (!(self.origin === e.origin)) return !1
				const s = e.pathname
				return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
			},
			new e.NetworkFirst({
				cacheName: "apis",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({maxEntries: 16, maxAgeSeconds: 86400})
				]
			}),
			"GET"
		),
		e.registerRoute(
			({url: e}) => {
				if (!(self.origin === e.origin)) return !1
				return !e.pathname.startsWith("/api/")
			},
			new e.NetworkFirst({
				cacheName: "others",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})
				]
			}),
			"GET"
		),
		e.registerRoute(
			({url: e}) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: "cross-origin",
				networkTimeoutSeconds: 10,
				plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 3600})]
			}),
			"GET"
		)
})
