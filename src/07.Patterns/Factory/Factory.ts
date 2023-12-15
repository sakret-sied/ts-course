import InsuranceFactoryAlt from './Classes/InsuranceFactoryAlt.js';
import TFInsuranceFactory from './Classes/TFInsuranceFactory.js';

const tfInsuranceFactory = new TFInsuranceFactory();
const tfInsurance = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(tfInsurance);

const insuranceFactoryAlt = new InsuranceFactoryAlt();
const abInsurance = insuranceFactoryAlt.createInsurance('tf');
insuranceFactoryAlt.saveHistory(abInsurance);
