export interface IInsurance {
  id: number;
  status: string;
  setVehicle(vehicle: any): void;
  submit(): Promise<boolean>;
}
