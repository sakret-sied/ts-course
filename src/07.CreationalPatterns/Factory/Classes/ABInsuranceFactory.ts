import { IInsurance } from '../Interfaces/IInsurance.js';
import ABInsurance from './ABInsurance.js';
import AbstructInsuranceFactory from './AbstractInsuranceFactory.js';

export default class ABInsuranceFactory extends AbstructInsuranceFactory {
  public override createInsurance(): IInsurance {
    return new ABInsurance();
  }
}
