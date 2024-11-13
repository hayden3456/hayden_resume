const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","images/coffee.webp","images/horizon.webp","images/kayly_cliff.jpg","images/kayly_cliff1.jpg","images/keyboard.webp","images/screenshot.webp","images/stars.webp","images/sunset.webp","k_logo.jpg","site.webmanifest","svg/angular.svg","svg/aspen.png","svg/az-ai-studio.svg","svg/az-devops.svg","svg/az-functions.svg","svg/az-sql.svg","svg/azure.svg","svg/c.svg","svg/comsol.svg","svg/cosmos.svg","svg/docker.svg","svg/emerson.png","svg/jquery.svg","svg/js.svg","svg/Matlab_Logo.png","svg/microsoft-office.svg","svg/open-ai.svg","svg/polymath.svg","svg/powershell.svg","svg/react.svg","svg/redis.svg","svg/seeq.png","svg/sql-server.svg","svg/ts.svg","svg/vmg.png","svg/Wonderware.png"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg",".webmanifest":"application/manifest+json",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DOrlQax7.js","app":"_app/immutable/entry/app.DfvEruuv.js","imports":["_app/immutable/entry/start.DOrlQax7.js","_app/immutable/chunks/entry.DQvxNPFL.js","_app/immutable/chunks/runtime.Bw3E3tKW.js","_app/immutable/chunks/index.7J3g-6nN.js","_app/immutable/entry/app.DfvEruuv.js","_app/immutable/chunks/runtime.Bw3E3tKW.js","_app/immutable/chunks/disclose-version.D5x2prPc.js","_app/immutable/chunks/index-client.BfS28M-C.js","_app/immutable/chunks/svelte-component.CH8aBv-S.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-D8UM8p9S.js')),
			__memo(() => import('./chunks/1-Dr7NPpHN.js')),
			__memo(() => import('./chunks/2-CXOI90n9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
