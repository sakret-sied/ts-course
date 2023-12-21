import InsuranceFactoryAlt from './classes/insurance-factory-alt.js';
import TFInsuranceFactory from './classes/tf-insurance-factory.js';

const tfInsuranceFactory = new TFInsuranceFactory();
const tfInsurance = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(tfInsurance);

const insuranceFactoryAlt = new InsuranceFactoryAlt();
const abInsurance = insuranceFactoryAlt.createInsurance('tf');
insuranceFactoryAlt.saveHistory(abInsurance);
