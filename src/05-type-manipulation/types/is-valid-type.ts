export type IsValidType =
  | { isValid: true }
  | { isValid: false; errorMessage: string };
