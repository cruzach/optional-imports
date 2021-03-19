"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useApplePay = useApplePay;

var _react = require("react");

var _useStripe = require("./useStripe");

/**
 * useApplePay hook
 */
function useApplePay() {
  const {
    isApplePaySupported,
    presentApplePay: presentApplePayNative,
    confirmApplePayPayment: confirmApplePayPaymentNative
  } = (0, _useStripe.useStripe)();
  const [loading, setLoading] = (0, _react.useState)(false);

  const presentApplePay = async data => {
    setLoading(true);
    const result = await presentApplePayNative(data);
    setLoading(false);
    return result;
  };

  const confirmApplePayPayment = async clientSecret => {
    setLoading(true);
    const result = await confirmApplePayPaymentNative(clientSecret);
    setLoading(false);
    return result;
  };

  return {
    loading,
    presentApplePay,
    confirmApplePayPayment,
    isApplePaySupported
  };
}
//# sourceMappingURL=useApplePay.js.map