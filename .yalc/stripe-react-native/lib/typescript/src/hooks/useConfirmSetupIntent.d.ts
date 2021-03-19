import type { CreatePaymentMethod } from '../types';
/**
 * useConfirmSetupIntent hook
 */
export declare function useConfirmSetupIntent(): {
    confirmSetupIntent: (paymentIntentClientSecret: string, data: CreatePaymentMethod.Params, options?: CreatePaymentMethod.Options) => Promise<{
        setupIntent?: import("../types").SetupIntent | undefined;
        error?: import("../types").StripeError<import("../types").ConfirmSetupIntentError> | undefined;
    }>;
    loading: boolean;
};
