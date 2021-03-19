import type { StripeError } from './types';
export declare const isiOS: boolean;
export declare const isAndroid: boolean;
export declare function createError<T>(error: StripeError<T>): {
    code: T;
    message: string;
};
