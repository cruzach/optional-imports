import type { CreatePaymentMethod } from '../types';
/**
 * useConfirmPayment hook
 */
export declare function useConfirmPayment(): {
    confirmPayment: (paymentIntentClientSecret: string, data: CreatePaymentMethod.Params, options?: CreatePaymentMethod.Options) => Promise<{
        paymentIntent?: import("../types").PaymentIntent | undefined;
        error?: import("../types").StripeError<import("../types").ConfirmPaymentError> | undefined;
    }>;
    loading: boolean;
};
