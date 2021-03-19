"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardField = CardField;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CardFieldNative = (0, _reactNative.requireNativeComponent)('CardField');
/**
 *  Card Field Component Props
 */

/**
 *  Card Field Component
 *
 * @example
 * ```ts
 * <CardField
 *    postalCodeEnabled={false}
 *    onCardChange={(cardDetails) => {
 *    console.log('card details', cardDetails);
 *      setCard(cardDetails);
 *    }}
 *    style={{height: 50}}
 *  />
 * ```
 * @param __namedParameters Props
 * @returns JSX.Element
 * @category ReactComponents
 */
function CardField({
  onCardChange,
  onFocus,
  ...props
}) {
  const onCardChangeHandler = (0, _react.useCallback)(event => {
    const card = event.nativeEvent;
    const cardNumber = card.number || '';
    const last4 = cardNumber.length >= 4 ? cardNumber.slice(cardNumber.length - 4) : '';
    const data = {
      last4: card.last4 || last4,
      number: cardNumber,
      cvc: card.cvc || '',
      expiryMonth: card.expiryMonth || 0,
      expiryYear: card.expiryYear || 0,
      complete: card.complete,
      brand: card.brand
    };

    if (card.hasOwnProperty('postalCode')) {
      data.postalCode = card.postalCode || '';
    }

    onCardChange === null || onCardChange === void 0 ? void 0 : onCardChange(data);
  }, [onCardChange]);
  const onFocusHandler = (0, _react.useCallback)(event => {
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event.nativeEvent.focusedField);
  }, [onFocus]);
  return /*#__PURE__*/_react.default.createElement(CardFieldNative, _extends({
    onCardChange: onCardChangeHandler,
    onFocusChange: onFocusHandler
  }, props));
}
//# sourceMappingURL=CardField.js.map