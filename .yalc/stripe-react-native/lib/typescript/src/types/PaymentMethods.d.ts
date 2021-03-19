import type { CardFieldInput } from './components/CardFieldInput';
export interface PaymentMethod {
    id: string;
    liveMode: boolean;
    customerId: string;
    billingDetails: PaymentMethods.BillingDetails;
    type: PaymentMethods.Types;
    AuBecsDebit: PaymentMethods.AuBecsDebit;
    BacsDebit: PaymentMethods.BacsDebit;
    Card: PaymentMethods.Card;
    Fpx: PaymentMethods.Fpx;
    Ideal: PaymentMethods.Ideal;
    SepaDebit: PaymentMethods.SepaDebit;
    Sofort: PaymentMethods.Sofort;
    Upi: PaymentMethods.Upi;
}
export declare namespace CreatePaymentMethod {
    type Params = CardParams | AlipayParams;
    type BillingDetails = {
        email?: string;
        name?: string;
        phone?: string;
        addressPostalCode?: string;
        addressCity?: string;
        addressCountry?: string;
        addressLine1?: string;
        addressLine2?: string;
        addressState?: string;
    };
    interface Options {
    }
    interface BaseParams<T extends PaymentMethods.Types> {
        type: T;
        billingDetails: BillingDetails;
    }
    type CardParams = (BaseParams<'Card'> & {
        cardDetails: CardFieldInput.Details;
    }) | (BaseParams<'Card'> & {
        paymentMethodId: string;
    });
    interface AlipayParams extends BaseParams<'Alipay'> {
    }
}
export declare namespace PaymentMethods {
    interface BillingDetails {
        email?: string;
        phone?: string;
        name?: string;
        address?: Address;
    }
    interface Address {
        city: string;
        county: string;
        line1: string;
        line2: string;
        postalCode: string;
        state: string;
    }
    interface AuBecsDebit {
        fingerprint?: string;
        last4?: string;
        bsbNumber?: string;
    }
    interface BacsDebit {
        sortCode?: string;
        last4?: string;
        fingerprint?: string;
    }
    interface Card {
        brand?: CardFieldInput.Brand;
        country?: string;
        expYear?: string;
        expMonth?: string;
        fingerprint?: string;
        funding?: string;
        last4?: string;
    }
    interface Fpx {
        bank?: string;
    }
    interface Ideal {
        bankIdentifierCode?: string;
        bank?: string;
    }
    interface SepaDebit {
        bankCode?: string;
        country?: string;
        fingerprint?: string;
        last4?: string;
    }
    interface Sofort {
        country?: string;
    }
    interface Upi {
        vpa?: string;
    }
    type Types = 'AfterpayClearpay' | 'Card' | 'Alipay' | 'Grabpay' | 'Ideal' | 'Fpx' | 'CardPresent' | 'SepaDebit' | 'AuBecsDebit' | 'BacsDebit' | 'Giropay' | 'P24' | 'Eps' | 'Bancontact' | 'Oxxo' | 'Sofort' | 'Upi' | 'Unknown';
}
