import ABInsurance from '../Classes/ABInsurance.js';
import TFInsurance from '../Classes/TFInsurance.js';

export const INSURANCE_TYPE = {
  tf: TFInsurance,
  ab: ABInsurance,
};

export type IT = typeof INSURANCE_TYPE;
export type InsuranceIT = IT[keyof IT];
