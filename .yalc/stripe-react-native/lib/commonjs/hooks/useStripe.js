"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStripe = useStripe;

var _types = require("../types");

var _react = require("react");

var _helpers = require("../helpers");

var _NativeStripeSdk = _interopRequireDefault(require("../NativeStripeSdk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const APPLE_PAY_NOT_SUPPORTED_MESSAGE = 'Apple pay is not supported on this device';
/**
 * useStripe hook
 */

function useStripe() {
  const [isApplePaySupported, setApplePaySupported] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    async function checkApplePaySupport() {
      const isSupported = _helpers.isiOS !== null && _helpers.isiOS !== void 0 ? _helpers.isiOS : await _NativeStripeSdk.default.isApplePaySupported();
      setApplePaySupported(isSupported);
    }

    checkApplePaySupport();
  }, []);

  const createPaymentMethod = async (data, options = {}) => {
    try {
      const paymentMethod = await _NativeStripeSdk.default.createPaymentMethod(data, options);
      return {
        paymentMethod,
        error: undefined
      };
    } catch (error) {
      return {
        paymentMethod: undefined,
        error: (0, _helpers.createError)(error)
      };
    }
  };

  const retrievePaymentIntent = async (clientSecret) => {
    try {
      const paymentIntent = await _NativeStripeSdk.default.retrievePaymentIntent(clientSecret);
      return {
        paymentIntent,
        error: undefined
      };
    } catch (error) {
      return {
        paymentIntent: undefined,
        error: (0, _helpers.createError)(error)
      };
    }
  };

  const confirmPaymentMethod = async (paymentIntentClientSecret, data, options) => {
    try {
      const paymentIntent = await _NativeStripeSdk.default.confirmPaymentMethod(paymentIntentClientSecret, data, options);
      return {
        paymentIntent,
        error: undefined
      };
    } catch (error) {
      return {
        paymentIntent: undefined,
        error: (0, _helpers.createError)(error)
      };
    }
  };

  const presentApplePay = async (params) => {
    if (!isApplePaySupported) {
      return {
        error: {
          code: _types.ApplePayError.Canceled,
          message: APPLE_PAY_NOT_SUPPORTED_MESSAGE
        }
      };
    }

    try {
      await _NativeStripeSdk.default.presentApplePay(params);
      return {
        error: undefined
      };
    } catch (error) {
      return {
        error: (0, _helpers.createError)(error)
      };
    }
  };

  const confirmApplePayPayment = async (clientSecret) => {
    if (!isApplePaySupported) {
      return {
        error: {
          code: _types.ApplePayError.Canceled,
          message: APPLE_PAY_NOT_SUPPORTED_MESSAGE
        }
      };
    }

    try {
      await _NativeStripeSdk.default.confirmApplePayPayment(clientSecret);
      return {
        error: undefined
      };
    } catch (error) {
      return {
        error: (0, _helpers.createError)(error)
      };
    }
  };

  const handleCardAction = async (paymentIntentClientSecret) => {
    try {
      const paymentIntent = await _NativeStripeSdk.default.handleCardAction(paymentIntentClientSecret);
      return {
        paymentIntent,
        error: undefined
      };
    } catch (error) {
      return {
        error: (0, _helpers.createError)(error),
        paymentIntent: undefined
      };
    }
  };

  const confirmSetupIntent = async (paymentIntentClientSecret, data, options) => {
    try {
      const setupIntent = await _NativeStripeSdk.default.confirmSetupIntent(paymentIntentClientSecret, data, options);
      return {
        setupIntent,
        error: undefined
      };
    } catch (error) {
      return {
        error: (0, _helpers.createError)(error),
        setupIntent: undefined
      };
    }
  };

  return {
    retrievePaymentIntent: retrievePaymentIntent,
    confirmPayment: confirmPaymentMethod,
    createPaymentMethod: createPaymentMethod,
    handleCardAction: handleCardAction,
    isApplePaySupported: isApplePaySupported,
    presentApplePay: presentApplePay,
    confirmApplePayPayment: confirmApplePayPayment,
    confirmSetupIntent: confirmSetupIntent
  };
}
//# sourceMappingURL=useStripe.js.map