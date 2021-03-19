import { Platform } from 'react-native';
export const isiOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export function createError(error) {
  return {
    code: error.code,
    message: error.message
  };
}
//# sourceMappingURL=helpers.js.map