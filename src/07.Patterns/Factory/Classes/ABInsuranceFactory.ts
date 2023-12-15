import { IInsurance } from '../Interfaces/IInsurance.js';
import ABInsurance from './ABInsurance.js';
import InsuranceFactory from './InsuranceFactory.js';

export default class ABInsuranceFactory extends InsuranceFactory {
  override createInsurance(): IInsurance {
    return new ABInsurance();
  }
}
