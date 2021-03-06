/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=1a7b10a54a309b3146bd)
 * Config saved to config.json and https://gist.github.com/1a7b10a54a309b3146bd
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";function e(e){return this.each(function(){var r=t(this),n=r.data("bs.alert");n||r.data("bs.alert",n=new a(this)),"string"==typeof e&&n[e].call(r)})}var r='[data-dismiss="alert"]',a=function(e){t(e).on("click",r,this.close)};a.VERSION="3.2.0",a.prototype.close=function(e){function r(){s.detach().trigger("closed.bs.alert").remove()}var a=t(this),n=a.attr("data-target");n||(n=a.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,""));var s=t(n);e&&e.preventDefault(),s.length||(s=a.hasClass("alert")?a:a.parent()),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",r).emulateTransitionEnd(150):r())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=a,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",r,a.prototype.close)}(jQuery);