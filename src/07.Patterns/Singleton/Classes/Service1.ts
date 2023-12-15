import MyMap from './MyMap.js';

export default class Service1 {
  addKey(key: number, value: string) {
    const myMap = MyMap.get();
    myMap.map.set(key, value);
    console.log(myMap.map);
  }
}
