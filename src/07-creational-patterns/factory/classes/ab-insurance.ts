import { InsuranceInterface } from '../interfaces/insurance-interface.js';

export default class ABInsurance implements InsuranceInterface {
  public id: number;
  public status: string;
  private vehicle: any;

  public setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }

  public async submit(): Promise<boolean> {
    const res = await fetch('', {
      method: 'POST',
      body: JSON.stringify({ vehicle: this.vehicle }),
    });
    const data = await res.json();
    return data.yes;
  }
}
