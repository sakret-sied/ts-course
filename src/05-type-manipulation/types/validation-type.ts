import { IsValidType } from './is-valid-type.js';

export type ValidationType<T> = { [K in keyof T]: IsValidType };
