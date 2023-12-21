import { InsuranceInterface } from '../interfaces/insurance-interface.js';
import ABInsurance from './ab-insurance.js';
import AbstructInsuranceFactory from './abstract-insurance-factory.js';

export default class ABInsuranceFactory extends AbstructInsuranceFactory {
  public override createInsurance(): InsuranceInterface {
    return new ABInsurance();
  }
}
