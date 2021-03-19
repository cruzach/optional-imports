"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConfirmSetupIntent = useConfirmSetupIntent;

var _react = require("react");

var _useStripe = require("./useStripe");

/**
 * useConfirmSetupIntent hook
 */
function useConfirmSetupIntent() {
  const [loading, setLoading] = (0, _react.useState)(false);
  const {
    confirmSetupIntent: confirmSetupIntentNative
  } = (0, _useStripe.useStripe)();
  const confirmSetupIntent = (0, _react.useCallback)(async (paymentIntentClientSecret, data, options = {}) => {
    setLoading(true);
    const result = await confirmSetupIntentNative(paymentIntentClientSecret, data, options);
    setLoading(false);
    return result;
  }, [confirmSetupIntentNative]);
  return {
    confirmSetupIntent,
    loading
  };
}
//# sourceMappingURL=useConfirmSetupIntent.js.map