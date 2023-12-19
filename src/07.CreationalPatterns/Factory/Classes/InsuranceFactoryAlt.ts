import { IInsurance } from '../Interfaces/IInsurance.js';
import { INSURANCE_TYPE, IT, InsuranceIT } from '../Types/InsuranceType.js';

export default class InsuranceFactoryAlt {
  public db: any;

  public createInsurance<T extends keyof IT>(
    type: T
  ): InstanceType<InsuranceIT> {
    return new INSURANCE_TYPE[type]();
  }

  public saveHistory(insurance: IInsurance): void {
    this.db?.save(insurance.id, insurance.status);
  }
}
