import { ApplePayError } from '../types';
import { useEffect, useState } from 'react';
import { isiOS, createError } from '../helpers';
import NativeStripeSdk from '../NativeStripeSdk';
import StripeSdk from '../NativeStripeSdk';
const APPLE_PAY_NOT_SUPPORTED_MESSAGE = 'Apple pay is not supported on this device';
/**
 * useStripe hook
 */

export function useStripe() {
  const [isApplePaySupported, setApplePaySupported] = useState(false);
  useEffect(() => {
    async function checkApplePaySupport() {
      const isSupported = isiOS !== null && isiOS !== void 0 ? isiOS : await StripeSdk.isApplePaySupported();
      setApplePaySupported(isSupported);
    }

    checkApplePaySupport();
  }, []);

  const createPaymentMethod = async (data, options = {}) => {
    try {
      const paymentMethod = await NativeStripeSdk.createPaymentMethod(data, options);
      return {
        paymentMethod,
        error: undefined
      };
    } catch (error) {
      return {
        paymentMethod: undefined,
        error: createError(error)
      };
    }
  };

  const retrievePaymentIntent = async (clientSecret) => {
    try {
      const paymentIntent = await NativeStripeSdk.retrievePaymentIntent(clientSecret);
      return {
        paymentIntent,
        error: undefined
      };
    } catch (error) {
      return {
        paymentIntent: undefined,
        error: createError(error)
      };
    }
  };

  const confirmPaymentMethod = async (paymentIntentClientSecret, data, options) => {
    try {
      const paymentIntent = await NativeStripeSdk.confirmPaymentMethod(paymentIntentClientSecret, data, options);
      return {
        paymentIntent,
        error: undefined
      };
    } catch (error) {
      return {
        paymentIntent: undefined,
        error: createError(error)
      };
    }
  };

  const presentApplePay = async (params) => {
    if (!isApplePaySupported) {
      return {
        error: {
          code: ApplePayError.Canceled,
          message: APPLE_PAY_NOT_SUPPORTED_MESSAGE
        }
      };
    }

    try {
      await NativeStripeSdk.presentApplePay(params);
      return {
        error: undefined
      };
    } catch (error) {
      return {
        error: createError(error)
      };
    }
  };

  const confirmApplePayPayment = async (clientSecret) => {
    if (!isApplePaySupported) {
      return {
        error: {
          code: ApplePayError.Canceled,
          message: APPLE_PAY_NOT_SUPPORTED_MESSAGE
        }
      };
    }

    try {
      await NativeStripeSdk.confirmApplePayPayment(clientSecret);
      return {
        error: undefined
      };
    } catch (error) {
      return {
        error: createError(error)
      };
    }
  };

  const handleCardAction = async (paymentIntentClientSecret) => {
    try {
      const paymentIntent = await NativeStripeSdk.handleCardAction(paymentIntentClientSecret);
      return {
        paymentIntent,
        error: undefined
      };
    } catch (error) {
      return {
        error: createError(error),
        paymentIntent: undefined
      };
    }
  };

  const confirmSetupIntent = async (paymentIntentClientSecret, data, options) => {
    try {
      const setupIntent = await NativeStripeSdk.confirmSetupIntent(paymentIntentClientSecret, data, options);
      return {
        setupIntent,
        error: undefined
      };
    } catch (error) {
      return {
        error: createError(error),
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