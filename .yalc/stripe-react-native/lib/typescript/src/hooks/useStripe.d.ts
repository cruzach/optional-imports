import { CreatePaymentMethod, PaymentMethod, StripeError, CreatePaymentMethodError, PaymentIntent, ConfirmPaymentError, RetrievePaymentIntentError, ApplePayError, CardActionError, SetupIntent, ConfirmSetupIntentError, ApplePay } from '../types';
/**
 * useStripe hook
 */
export declare function useStripe(): {
    retrievePaymentIntent: (clientSecret: string) => Promise<{
        paymentIntent?: PaymentIntent;
        error?: StripeError<RetrievePaymentIntentError>;
    }>;
    confirmPayment: (paymentIntentClientSecret: string, data: CreatePaymentMethod.Params, options: CreatePaymentMethod.Options) => Promise<{
        paymentIntent?: PaymentIntent;
        error?: StripeError<ConfirmPaymentError>;
    }>;
    createPaymentMethod: (data: CreatePaymentMethod.Params, options?: CreatePaymentMethod.Options) => Promise<{
        paymentMethod?: PaymentMethod;
        error?: StripeError<CreatePaymentMethodError>;
    }>;
    handleCardAction: (paymentIntentClientSecret: string) => Promise<{
        paymentIntent?: PaymentIntent;
        error?: StripeError<CardActionError>;
    }>;
    isApplePaySupported: boolean;
    presentApplePay: (params: ApplePay.PresentParams) => Promise<{
        error?: StripeError<ApplePayError>;
    }>;
    confirmApplePayPayment: (clientSecret: string) => Promise<{
        error?: StripeError<ApplePayError>;
    }>;
    confirmSetupIntent: (paymentIntentClientSecret: string, data: CreatePaymentMethod.Params, options: CreatePaymentMethod.Options) => Promise<{
        setupIntent?: SetupIntent;
        error?: StripeError<ConfirmSetupIntentError>;
    }>;
};
