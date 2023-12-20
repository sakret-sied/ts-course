import FirstAPI from './classes/FirstAPI.js';
import Form from './classes/Form.js';
import SecondAPI from './classes/SecondAPI.js';

const vasya = new Form('Vasya');

const form1 = new FirstAPI();
form1.save(vasya);

const form2 = new SecondAPI();
form2.save(vasya);
