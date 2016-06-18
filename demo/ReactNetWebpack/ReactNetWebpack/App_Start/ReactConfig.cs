using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(ReactNetWebpack.ReactConfig), "Configure")]

namespace ReactNetWebpack
{
	public static class ReactConfig
	{
		public static void Configure()
		{
			// If you use an external build too (for example, Babel, Webpack,
			// Browserify or Gulp), you can improve performance by disabling
			// ReactJS.NET's version of Babel and loading the pre-transpiled
			// scripts. Example:
#if DEBUG
			ReactSiteConfiguration.Configuration
				.SetLoadBabel(false)
				.SetLoadReact(false)
				.AddScriptWithoutTransform("~/build/server.bundle.js");
#else
			ReactSiteConfiguration.Configuration
				.SetLoadBabel(false)
				.SetLoadReact(false)
				.AddScriptWithoutTransform("~/dist/server.bundle.min.js");
#endif
		}
	}
}