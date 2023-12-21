import FirstAPI from './classes/first-api.js';
import Form from './classes/form.js';
import SecondAPI from './classes/second-api.js';

const vasya = new Form('Vasya');

const form1 = new FirstAPI();
form1.save(vasya);

const form2 = new SecondAPI();
form2.save(vasya);
