import DocumentItem from './classes/document-item.js';

const item = new DocumentItem();
item.text = 'My post';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.deleteDoc();
console.log(item.getState());
