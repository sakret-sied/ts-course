import { IInsurance } from '../Interfaces/IInsurance.js';

export default class ABInsurance implements IInsurance {
  id: number;
  status: string;
  private vehicle: any;

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }

  async submit(): Promise<boolean> {
    const res = await fetch('', {
      method: 'POST',
      body: JSON.stringify({ vehicle: this.vehicle }),
    });
    const data = await res.json();
    return data.yes;
  }
}
