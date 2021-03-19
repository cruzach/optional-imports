"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApplePay = require("./ApplePay");

Object.keys(_ApplePay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ApplePay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ApplePay[key];
    }
  });
});

var _PaymentIntents = require("./PaymentIntents");

Object.keys(_PaymentIntents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PaymentIntents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PaymentIntents[key];
    }
  });
});

var _PaymentMethods = require("./PaymentMethods");

Object.keys(_PaymentMethods).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PaymentMethods[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PaymentMethods[key];
    }
  });
});

var _SetupIntent = require("./SetupIntent");

Object.keys(_SetupIntent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SetupIntent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SetupIntent[key];
    }
  });
});

var _ThreeDSecure = require("./ThreeDSecure");

Object.keys(_ThreeDSecure).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ThreeDSecure[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ThreeDSecure[key];
    }
  });
});

var _ApplePayButtonComponent = require("./components/ApplePayButtonComponent");

Object.keys(_ApplePayButtonComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ApplePayButtonComponent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ApplePayButtonComponent[key];
    }
  });
});

var _CardFieldInput = require("./components/CardFieldInput");

Object.keys(_CardFieldInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CardFieldInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CardFieldInput[key];
    }
  });
});

var _Errors = require("./Errors");

Object.keys(_Errors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Errors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Errors[key];
    }
  });
});
//# sourceMappingURL=index.js.map