"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplePayButton = ApplePayButton;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ApplePayButtonNative = (0, _reactNative.requireNativeComponent)('ApplePayButton');
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
function ApplePayButton({
  onPress,
  buttonStyle = 'black',
  type = 'plain',
  ...props
}) {
  const buttonType = (0, _react.useMemo)(() => mapButtonType(type), [type]);
  const style = (0, _react.useMemo)(() => mapButtonStyle(buttonStyle), [buttonStyle]);
  return /*#__PURE__*/_react.default.createElement(ApplePayButtonNative, _extends({
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