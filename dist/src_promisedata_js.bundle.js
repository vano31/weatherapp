"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["src_promisedata_js"],{

/***/ "./src/promisedata.js":
/*!****************************!*\
  !*** ./src/promisedata.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function asyncWeather () {

    let searchlocation = 'london';

    let attemptedLocation = fetch(`http://api.weatherapi.com/v1/current.json?key=8a9310029e7f43e2b6a40658230205&q=${searchlocation}&aqi=no`, {mode: 'cors'});

    attemptedLocation.then(function(response) {
        //console.log(response)
        return response.json();
    })
    .then(function(response) {
        //console.log(response)
        return response;
    })


})());











/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb21pc2VkYXRhX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7O0FBRWY7O0FBRUEsb0hBQW9ILGVBQWUsV0FBVyxhQUFhOztBQUUzSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsQ0FBQyxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3Byb21pc2VkYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBhc3luY1dlYXRoZXIgKCkge1xuXG4gICAgbGV0IHNlYXJjaGxvY2F0aW9uID0gJ2xvbmRvbic7XG5cbiAgICBsZXQgYXR0ZW1wdGVkTG9jYXRpb24gPSBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PThhOTMxMDAyOWU3ZjQzZTJiNmE0MDY1ODIzMDIwNSZxPSR7c2VhcmNobG9jYXRpb259JmFxaT1ub2AsIHttb2RlOiAnY29ycyd9KTtcblxuICAgIGF0dGVtcHRlZExvY2F0aW9uLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KVxuXG5cbn0pKCk7XG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=