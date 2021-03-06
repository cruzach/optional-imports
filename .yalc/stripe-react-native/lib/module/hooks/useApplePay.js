import { useState } from 'react';
import { useStripe } from './useStripe';
/**
 * useApplePay hook
 */

export function useApplePay() {
  const {
    isApplePaySupported,
    presentApplePay: presentApplePayNative,
    confirmApplePayPayment: confirmApplePayPaymentNative
  } = useStripe();
  const [loading, setLoading] = useState(false);

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