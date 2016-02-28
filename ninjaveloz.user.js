// ==UserScript==
// @name        NinjaVeloz
// @author      raina ft. StreetDogARG
// @colaborator StreetDogARG
// @namespace   https://github.com/StreetDogArg/ninjaveloz
// @homepage    https://www.taringa.net/comunidades/juegos-originales-gratis-steam
// @defaulticon data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAJiYlAK/N+gAZBfcAPT09AJmZmQANBwAAbjQfANvq/wAFDQAA1tbWAAAAAAAAAAAAAAAAAAAAAAAAAAAAZHdmaqVmAABHdmZmqlYAAHdmZmZqpQAAZmZmZmaqUABmZmZmYAqlAAZmZmYAAKpQZmZmZmAAClBmEWEWYAAKpWYWZhZmAAClZmYWZmYAAKUoiGiIJgAACipqimopAAAKlmZmmZYAAAARmZkRMAAAADMzMzMAAAAAAGZmYDMAAAAADwAAAA8AAAAPAAAABwAAAGMAAIDxAAAAeQAAAHgAAAA8AAAAPAAAAD4AAAA+AAAAPwAAAH8AAAD/AADBPwAA
// @icon64      data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAJiYlAK/N+gAZBfcAPT09AJmZmQANBwAAbjQfANvq/wAFDQAA1tbWAAAAAAAAAAAAAAAAAAAAAAAAAAAAZHdmaqVmAABHdmZmqlYAAHdmZmZqpQAAZmZmZmaqUABmZmZmYAqlAAZmZmYAAKpQZmZmZmAAClBmEWEWYAAKpWYWZhZmAAClZmYWZmYAAKUoiGiIJgAACipqimopAAAKlmZmmZYAAAARmZkRMAAAADMzMzMAAAAAAGZmYDMAAAAADwAAAA8AAAAPAAAABwAAAGMAAIDxAAAAeQAAAHgAAAA8AAAAPAAAAD4AAAA+AAAAPwAAAH8AAAD/AADBPwAA
// @description Script que hace saltar la ventana de Activación de Keys en Steam cuando detecta una Key en el portapapeles, haciendo posible un mejor Ninjeo o más cómodo para cargar las keys que compraste en sitios, ver README para los sitios soportados. Este Script REQUIERE STEAM CORRIENDO.
// ------------ Sitios de compra
// @include     /^https?:\/\/www\.humblebundle\.com\/downloads\?/
// @include     /^https?:\/\/www\.humblebundle\.com\/home\/(keys|library)/
// @include     /^https?:\/\/www\.indieroyale\.com\/bundle\/key\//
// @include     /^https?:\/\/www\.indiegala\.com/(profile|game)\?/
// @include     /^https?:\/\/groupees\.com\/purchases/
// @include     /^https?:\/\/www\.bundlestars\.com\/en\/orders/
// @include     /^https?:\/\/(www\.)?flyingbundle\.com\/users\/account/
// @include     /^https?:\/\/(www\.)?dailyindiegame\.com\/account_page\.html/
// @include     /^https?:\/\/www\.greenmangaming\.com\/user\/account/
// @include     /^https:\/\/secure\.nuuvem\.com\/account\/library/
// ------------ Sitios de sorteos, giveaways, etc
// @include     /^https?:\/\/www\.steamgifts\.com\/giveaways\/won/
// @include     /^https?:\/\/steamcompanion\.com\/gifts\/won/
// @include     /^http:\/\/www\.dlh\.net\/en\/steam-keys\.html/
// @include     *://gameminer.net/messages/*
// @include     *://www.tremorgames.com/message/*
// @include     *://www.listia.com/account/message/*
// @include     *://www.listia.com/auction/*
// @include     *://www.gleam.io/*
// @include     *://gleam.io/*
// ------------ Sitios de ninjeo
// @include     *://www.taringa.net/*
// @include     *://whosgamingnow.net/discussion/*
// @include     *://www.steamgifts.com/discussion/*
// @include     *://steamcommunity.com/groups/*
// ------------ Otros (pesonales, mails)
// @include     https://*.mail.live.com/*
// @include     https://outlook.live.com/*
// ------------ Incluiré más sitios con el tiempo, a medida que me lo recomienden.
// @updateURL   https://github.com/StreetDogArg/ninjaveloz/raw/master/ninjaveloz.user.js
// @downloadURL https://github.com/StreetDogArg/ninjaveloz/raw/master/ninjaveloz.user.js
// @version     1.4
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
