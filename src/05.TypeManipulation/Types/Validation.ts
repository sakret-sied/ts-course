import { IsValid } from './IsValid.js';

export type Validation<T> = { [K in keyof T]: IsValid };
