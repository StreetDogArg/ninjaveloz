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
// @include     *
// @updateURL   https://github.com/StreetDogArg/ninjaveloz/raw/master/ninjaveloz.user.js
// @downloadURL https://github.com/StreetDogArg/ninjaveloz/raw/master/ninjaveloz.user.js
// @version     0
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
