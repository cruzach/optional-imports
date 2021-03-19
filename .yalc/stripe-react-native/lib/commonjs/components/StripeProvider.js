"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripeProvider = StripeProvider;

var _react = _interopRequireWildcard(require("react"));

var _NativeStripeSdk = _interopRequireDefault(require("../NativeStripeSdk"));

var _helpers = require("../helpers");

var _package = _interopRequireDefault(require("../../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const appInfo = {
  name: _package.default.name,
  url: _package.default.repository,
  version: _package.default.version
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

function StripeProvider({
  children,
  publishableKey,
  merchantIdentifier,
  threeDSecureParams,
  stripeAccountId
}) {
  (0, _react.useEffect)(() => {
    if (publishableKey === '') {
      return;
    }

    if (_helpers.isAndroid) {
      _NativeStripeSdk.default.initialise(publishableKey, appInfo, stripeAccountId, threeDSecureParams);
    } else {
      _NativeStripeSdk.default.initialise(publishableKey, appInfo, stripeAccountId, threeDSecureParams, merchantIdentifier);
    }
  }, [publishableKey, merchantIdentifier, stripeAccountId, threeDSecureParams]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
}
//# sourceMappingURL=StripeProvider.js.map