import ABInsurance from '../classes/ab-insurance.js';
import TFInsurance from '../classes/tf-insurance.js';

export const INSURANCE_TYPE = {
  tf: TFInsurance,
  ab: ABInsurance,
};

export type InsuranceListType = typeof INSURANCE_TYPE;
export type InsuranceType = InsuranceListType[keyof InsuranceListType];
