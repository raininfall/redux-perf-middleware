'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
/**
* Redux performance logger
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

var present = require('present');

var perflogger = exports.perflogger = function perflogger(store) {
      return function (next) {
            return function (action) {
                  console.log('%c Dispatching ', 'background: #222; color: #bada55', action);
                  var start = present();
                  var result = next(action);
                  var end = present();
                  console.log('%c Action with type "' + String(action.type) + '" took ' + (end - start).toFixed(2) + ' milliseconds.', 'background: #bada55; color: #222');
                  return result;
            };
      };
};

exports.default = perflogger;