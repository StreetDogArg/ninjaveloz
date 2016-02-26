// ==UserScript==
// @name        NinjaVeloz
// @namespace   raina ft. StreetDogArg
// @description 
// @include     /^https?:\/\/www\.humblebundle\.com\/downloads\?/
// @include     /^https?:\/\/www\.humblebundle\.com\/home\/(keys|library)/
// @include     /^https?:\/\/www\.indieroyale\.com\/bundle\/key\//
// @include     /^https?:\/\/www\.indiegala\.com/(profile|game)\?/
// @include     /^https?:\/\/groupees\.com\/purchases/
// @include     /^https?:\/\/www\.steamgifts\.com\/giveaways\/won/
// @include     /^https?:\/\/www\.bundlestars\.com\/en\/orders/
// @include     /^https?:\/\/steamcompanion\.com\/gifts\/won/
// @include     /^https?:\/\/(www\.)?flyingbundle\.com\/users\/account/
// @include     /^https?:\/\/(www\.)?dailyindiegame\.com\/account_page\.html/
// @include     /^https?:\/\/www\.greenmangaming\.com\/user\/account/
// @include     /^https:\/\/secure\.nuuvem\.com\/account\/library/
// @include     /^http:\/\/www\.dlh\.net\/en\/steam-keys\.html/
// @include     /^http:\/\/www\.taringa\.net\/
// @include     /^https:\/\/www\.taringa\.net\/
// @version     1
// @grant       none
// ==/UserScript==
(function() {
	"use strict";
	var activateProduct = function(e) {
		var productCode = window.getSelection().toString().trim();
		if (!productCode) {
			productCode = e.target.value;
		}
		if (/^[\d\w]{2,5}(\-[\d\w]{4,5}){2,4}$/.test(productCode)) {
			window.location.href = "steam://open/activateproduct";
		}
	};
	window.addEventListener("copy", activateProduct, false);
}());
