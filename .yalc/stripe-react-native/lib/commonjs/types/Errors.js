"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplePayError = exports.RetrievePaymentIntentError = exports.CreatePaymentMethodError = exports.ConfirmSetupIntentError = exports.CardActionError = exports.ConfirmPaymentError = void 0;
let ConfirmPaymentError;
exports.ConfirmPaymentError = ConfirmPaymentError;

(function (ConfirmPaymentError) {
  ConfirmPaymentError["Canceled"] = "Canceled";
  ConfirmPaymentError["Failed"] = "Failed";
  ConfirmPaymentError["Unknown"] = "Unknown";
})(ConfirmPaymentError || (exports.ConfirmPaymentError = ConfirmPaymentError = {}));

let CardActionError;
exports.CardActionError = CardActionError;

(function (CardActionError) {
  CardActionError["Canceled"] = "Canceled";
  CardActionError["Failed"] = "Failed";
  CardActionError["Unknown"] = "Unknown";
})(CardActionError || (exports.CardActionError = CardActionError = {}));

let ConfirmSetupIntentError;
exports.ConfirmSetupIntentError = ConfirmSetupIntentError;

(function (ConfirmSetupIntentError) {
  ConfirmSetupIntentError["Canceled"] = "Canceled";
  ConfirmSetupIntentError["Failed"] = "Failed";
  ConfirmSetupIntentError["Unknown"] = "Unknown";
})(ConfirmSetupIntentError || (exports.ConfirmSetupIntentError = ConfirmSetupIntentError = {}));

let CreatePaymentMethodError;
exports.CreatePaymentMethodError = CreatePaymentMethodError;

(function (CreatePaymentMethodError) {
  CreatePaymentMethodError["Failed"] = "Failed";
})(CreatePaymentMethodError || (exports.CreatePaymentMethodError = CreatePaymentMethodError = {}));

let RetrievePaymentIntentError;
exports.RetrievePaymentIntentError = RetrievePaymentIntentError;

(function (RetrievePaymentIntentError) {
  RetrievePaymentIntentError["Canceled"] = "Canceled";
})(RetrievePaymentIntentError || (exports.RetrievePaymentIntentError = RetrievePaymentIntentError = {}));

let ApplePayError;
exports.ApplePayError = ApplePayError;

(function (ApplePayError) {
  ApplePayError["Canceled"] = "Canceled";
  ApplePayError["Failed"] = "Failed";
  ApplePayError["Unknown"] = "Unknown";
})(ApplePayError || (exports.ApplePayError = ApplePayError = {}));
//# sourceMappingURL=Errors.js.map