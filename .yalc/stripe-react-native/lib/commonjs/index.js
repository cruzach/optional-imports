"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useConfirmPayment: true,
  useConfirmSetupIntent: true,
  useStripe: true,
  useApplePay: true,
  StripeProvider: true,
  StripeProviderProps: true,
  CardField: true,
  CardFieldProps: true,
  ApplePayButton: true,
  ApplePayButtonProps: true
};
Object.defineProperty(exports, "useConfirmPayment", {
  enumerable: true,
  get: function () {
    return _useConfirmPayment.useConfirmPayment;
  }
});
Object.defineProperty(exports, "useConfirmSetupIntent", {
  enumerable: true,
  get: function () {
    return _useConfirmSetupIntent.useConfirmSetupIntent;
  }
});
Object.defineProperty(exports, "useStripe", {
  enumerable: true,
  get: function () {
    return _useStripe.useStripe;
  }
});
Object.defineProperty(exports, "useApplePay", {
  enumerable: true,
  get: function () {
    return _useApplePay.useApplePay;
  }
});
Object.defineProperty(exports, "StripeProvider", {
  enumerable: true,
  get: function () {
    return _StripeProvider.StripeProvider;
  }
});
Object.defineProperty(exports, "StripeProviderProps", {
  enumerable: true,
  get: function () {
    return _StripeProvider.Props;
  }
});
Object.defineProperty(exports, "CardField", {
  enumerable: true,
  get: function () {
    return _CardField.CardField;
  }
});
Object.defineProperty(exports, "CardFieldProps", {
  enumerable: true,
  get: function () {
    return _CardField.Props;
  }
});
Object.defineProperty(exports, "ApplePayButton", {
  enumerable: true,
  get: function () {
    return _ApplePayButton.ApplePayButton;
  }
});
Object.defineProperty(exports, "ApplePayButtonProps", {
  enumerable: true,
  get: function () {
    return _ApplePayButton.Props;
  }
});

var _useConfirmPayment = require("./hooks/useConfirmPayment");

var _useConfirmSetupIntent = require("./hooks/useConfirmSetupIntent");

var _useStripe = require("./hooks/useStripe");

var _useApplePay = require("./hooks/useApplePay");

var _StripeProvider = require("./components/StripeProvider");

var _CardField = require("./components/CardField");

var _ApplePayButton = require("./components/ApplePayButton");

var _index = require("./types/index");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});
//# sourceMappingURL=index.js.map