"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConfirmPayment = useConfirmPayment;

var _react = require("react");

var _useStripe = require("./useStripe");

/**
 * useConfirmPayment hook
 */
function useConfirmPayment() {
  const [loading, setLoading] = (0, _react.useState)(false);
  const {
    confirmPayment: confirmPaymentMethod
  } = (0, _useStripe.useStripe)();
  const confirmPayment = (0, _react.useCallback)(async (paymentIntentClientSecret, data, options = {}) => {
    setLoading(true);
    const result = await confirmPaymentMethod(paymentIntentClientSecret, data, options);
    setLoading(false);
    return result;
  }, [confirmPaymentMethod]);
  return {
    confirmPayment,
    loading
  };
}
//# sourceMappingURL=useConfirmPayment.js.map