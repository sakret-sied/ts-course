import { InsuranceInterface } from '../interfaces/insurance-interface.js';
import {
  INSURANCE_TYPE,
  InsuranceListType,
  InsuranceType,
} from '../types/insurance-type.js';

export default class InsuranceFactoryAlt {
  public db: any;

  public createInsurance<T extends keyof InsuranceListType>(
    type: T
  ): InstanceType<InsuranceType> {
    return new INSURANCE_TYPE[type]();
  }

  public saveHistory(insurance: InsuranceInterface): void {
    this.db?.save(insurance.id, insurance.status);
  }
}
