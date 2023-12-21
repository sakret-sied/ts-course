import { InsuranceInterface } from '../interfaces/insurance-interface.js';
import AbstructInsuranceFactory from './abstract-insurance-factory.js';
import TFInsurance from './tf-insurance.js';

export default class TFInsuranceFactory extends AbstructInsuranceFactory {
  public override createInsurance(): InsuranceInterface {
    return new TFInsurance();
  }
}
