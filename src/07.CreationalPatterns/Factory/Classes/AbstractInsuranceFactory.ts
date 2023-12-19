import { IInsurance } from '../Interfaces/IInsurance';

export default abstract class AbstructInsuranceFactory {
  public db: any;

  public abstract createInsurance(): IInsurance;

  public saveHistory(insurance: IInsurance): void {
    this.db?.save(insurance.id, insurance.status);
  }
}
