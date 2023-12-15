import { IInsurance } from '../Interfaces/IInsurance';

export default abstract class InsuranceFactory {
  db: any;

  abstract createInsurance(): IInsurance;

  saveHistory(insurance: IInsurance) {
    this.db?.save(insurance.id, insurance.status);
  }
}
