import { useCallback, useState } from 'react';
import { useStripe } from './useStripe';
/**
 * useConfirmSetupIntent hook
 */

export function useConfirmSetupIntent() {
  const [loading, setLoading] = useState(false);
  const {
    confirmSetupIntent: confirmSetupIntentNative
  } = useStripe();
  const confirmSetupIntent = useCallback(async (paymentIntentClientSecret, data, options = {}) => {
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