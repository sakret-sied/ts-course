import { InsuranceInterface } from '../interfaces/insurance-interface.js';

export default abstract class AbstructInsuranceFactory {
  public db: any;

  public abstract createInsurance(): InsuranceInterface;

  public saveHistory(insurance: InsuranceInterface): void {
    this.db?.save(insurance.id, insurance.status);
  }
}
