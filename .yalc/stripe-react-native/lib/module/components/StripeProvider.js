import React, { useEffect } from 'react';
import NativeStripeSdk from '../NativeStripeSdk';
import { isAndroid } from '../helpers';
import pjson from '../../package.json';
/**
 *  Stripe Provider Component Props
 */

const appInfo = {
  name: pjson.name,
  url: pjson.repository,
  version: pjson.version
};
/**
 *  StripeProvider Component
 *
 * @example
 * ```ts
 *  <StripeProvider
 *    publishableKey="_publishableKey"
 *    merchantIdentifier="merchant.com.stripe.react.native"
 *    threeDSecureParams={{
 *      backgroundColor: "#FFF",
 *      timeout: 5,
 *    }}
 *  >
 *    <App />
 *  </StripeProvider>
 * ```
 * @param __namedParameters Props
 * @returns JSX.Element
 * @category ReactComponents
 */

export function StripeProvider({
  children,
  publishableKey,
  merchantIdentifier,
  threeDSecureParams,
  stripeAccountId
}) {
  useEffect(() => {
    if (publishableKey === '') {
      return;
    }

    if (isAndroid) {
      NativeStripeSdk.initialise(publishableKey, appInfo, stripeAccountId, threeDSecureParams);
    } else {
      NativeStripeSdk.initialise(publishableKey, appInfo, stripeAccountId, threeDSecureParams, merchantIdentifier);
    }
  }, [publishableKey, merchantIdentifier, stripeAccountId, threeDSecureParams]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
}
//# sourceMappingURL=StripeProvider.js.map