import { IInsurance } from '../Interfaces/IInsurance.js';
import AbstructInsuranceFactory from './AbstractInsuranceFactory.js';
import TFInsurance from './TFInsurance.js';

export default class TFInsuranceFactory extends AbstructInsuranceFactory {
  public override createInsurance(): IInsurance {
    return new TFInsurance();
  }
}
