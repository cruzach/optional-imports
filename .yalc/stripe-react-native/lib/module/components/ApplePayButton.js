function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useMemo } from 'react';
import { requireNativeComponent } from 'react-native';
const ApplePayButtonNative = requireNativeComponent('ApplePayButton');
/**
 *  Apple Pay Button Component Props
 */

/**
 *  Apple Pay Button Component
 *
 * @example
 * ```ts
 *  <ApplePayButton
 *    onPress={pay}
 *    type="plain"
 *    buttonStyle="black"
 *    style={styles.payButton}
 *  />
 * ```
 * @param __namedParameters Props
 * @returns JSX.Element
 * @category ReactComponents
 */
export function ApplePayButton({
  onPress,
  buttonStyle = 'black',
  type = 'plain',
  ...props
}) {
  const buttonType = useMemo(() => mapButtonType(type), [type]);
  const style = useMemo(() => mapButtonStyle(buttonStyle), [buttonStyle]);
  return /*#__PURE__*/React.createElement(ApplePayButtonNative, _extends({
    type: buttonType,
    buttonStyle: style,
    onPressAction: onPress
  }, props));
}

function mapButtonType(type) {
  switch (type) {
    case 'plain':
      return 0;

    case 'buy':
      return 1;

    case 'setUp':
      return 2;

    case 'inStore':
      return 3;

    case 'donate':
      return 4;

    case 'checkout':
      return 5;

    case 'book':
      return 6;

    case 'subscribe':
      return 7;

    case 'reload':
      return 8;

    case 'addMoney':
      return 9;

    case 'topUp':
      return 10;

    case 'order':
      return 11;

    case 'rent':
      return 12;

    case 'support':
      return 13;

    case 'contribute':
      return 14;

    case 'tip':
      return 15;

    default:
      return 0;
  }
}

function mapButtonStyle(type) {
  switch (type) {
    case 'white':
      return 0;

    case 'whiteOutline':
      return 1;

    case 'black':
      return 2;

    case 'automatic':
      return 3;

    default:
      return 2;
  }
}
//# sourceMappingURL=ApplePayButton.js.map