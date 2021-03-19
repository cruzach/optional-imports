"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createError = createError;
exports.isAndroid = exports.isiOS = void 0;

var _reactNative = require("react-native");

const isiOS = _reactNative.Platform.OS === 'ios';
exports.isiOS = isiOS;
const isAndroid = _reactNative.Platform.OS === 'android';
exports.isAndroid = isAndroid;

function createError(error) {
  return {
    code: error.code,
    message: error.message
  };
}
//# sourceMappingURL=helpers.js.map