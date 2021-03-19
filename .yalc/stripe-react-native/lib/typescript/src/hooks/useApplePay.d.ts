import type { ApplePay } from '../types';
/**
 * useApplePay hook
 */
export declare function useApplePay(): {
    loading: boolean;
    presentApplePay: (data: ApplePay.PresentParams) => Promise<{
        error?: import("../types").StripeError<import("../types").ApplePayError> | undefined;
    }>;
    confirmApplePayPayment: (clientSecret: string) => Promise<{
        error?: import("../types").StripeError<import("../types").ApplePayError> | undefined;
    }>;
    isApplePaySupported: boolean;
};
