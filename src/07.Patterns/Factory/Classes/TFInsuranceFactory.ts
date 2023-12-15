import { IInsurance } from '../Interfaces/IInsurance.js';
import InsuranceFactory from './InsuranceFactory.js';
import TFInsurance from './TFInsurance.js';

export default class TFInsuranceFactory extends InsuranceFactory {
  override createInsurance(): IInsurance {
    return new TFInsurance();
  }
}
