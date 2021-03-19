export declare namespace ApplePay {
    type ShippingMethodType = 'final' | 'pending';
    type ContactFieldsType = 'emailAddress' | 'name' | 'phoneNumber' | 'phoneticName' | 'postalAddress';
    interface ShippingMethod {
        label: string;
        amount: string;
        type?: ShippingMethodType;
        identifier: string;
        detail?: string;
    }
    interface CartSummaryItem {
        label: string;
        amount: string;
    }
    interface PresentParams {
        cartItems: CartSummaryItem[];
        country: string;
        currency: string;
        requiredShippingAddressFields?: ContactFieldsType[];
        requiredBillingContactFields?: ContactFieldsType[];
        shippingMethods?: ShippingMethod[];
    }
}
