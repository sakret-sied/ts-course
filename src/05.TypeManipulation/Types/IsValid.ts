export type IsValid =
  | { isValid: true }
  | { isValid: false; errorMessage: string };
