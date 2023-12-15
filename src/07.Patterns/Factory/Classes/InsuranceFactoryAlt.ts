import { IInsurance } from '../Interfaces/IInsurance.js';
import { INSURANCE_TYPE, IT, InsuranceIT } from '../Types/InsuranceType.js';

export default class InsuranceFactoryAlt {
  db: any;

  createInsurance<T extends keyof IT>(type: T): InstanceType<InsuranceIT> {
    return new INSURANCE_TYPE[type]();
  }

  saveHistory(insurance: IInsurance): void {
    this.db?.save(insurance.id, insurance.status);
  }
}
