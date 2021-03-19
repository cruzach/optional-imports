export let ConfirmPaymentError;

(function (ConfirmPaymentError) {
  ConfirmPaymentError["Canceled"] = "Canceled";
  ConfirmPaymentError["Failed"] = "Failed";
  ConfirmPaymentError["Unknown"] = "Unknown";
})(ConfirmPaymentError || (ConfirmPaymentError = {}));

export let CardActionError;

(function (CardActionError) {
  CardActionError["Canceled"] = "Canceled";
  CardActionError["Failed"] = "Failed";
  CardActionError["Unknown"] = "Unknown";
})(CardActionError || (CardActionError = {}));

export let ConfirmSetupIntentError;

(function (ConfirmSetupIntentError) {
  ConfirmSetupIntentError["Canceled"] = "Canceled";
  ConfirmSetupIntentError["Failed"] = "Failed";
  ConfirmSetupIntentError["Unknown"] = "Unknown";
})(ConfirmSetupIntentError || (ConfirmSetupIntentError = {}));

export let CreatePaymentMethodError;

(function (CreatePaymentMethodError) {
  CreatePaymentMethodError["Failed"] = "Failed";
})(CreatePaymentMethodError || (CreatePaymentMethodError = {}));

export let RetrievePaymentIntentError;

(function (RetrievePaymentIntentError) {
  RetrievePaymentIntentError["Canceled"] = "Canceled";
})(RetrievePaymentIntentError || (RetrievePaymentIntentError = {}));

export let ApplePayError;

(function (ApplePayError) {
  ApplePayError["Canceled"] = "Canceled";
  ApplePayError["Failed"] = "Failed";
  ApplePayError["Unknown"] = "Unknown";
})(ApplePayError || (ApplePayError = {}));
//# sourceMappingURL=Errors.js.map