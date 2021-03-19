function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useCallback } from 'react';
import { requireNativeComponent } from 'react-native';
const CardFieldNative = requireNativeComponent('CardField');
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
export function CardField({
  onCardChange,
  onFocus,
  ...props
}) {
  const onCardChangeHandler = useCallback(event => {
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
  const onFocusHandler = useCallback(event => {
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event.nativeEvent.focusedField);
  }, [onFocus]);
  return /*#__PURE__*/React.createElement(CardFieldNative, _extends({
    onCardChange: onCardChangeHandler,
    onFocusChange: onFocusHandler
  }, props));
}
//# sourceMappingURL=CardField.js.map