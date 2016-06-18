using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace ReactNetWebpack.Extensions {
	public static class HtmlHelperExtensions {
		public static bool IsDebug(this HtmlHelper htmlHelper) {
#if DEBUG
			return true;
#else
			return false;
#endif
		}
	}
}
