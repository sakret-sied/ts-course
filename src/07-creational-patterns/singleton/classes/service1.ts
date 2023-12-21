import MyMap from './my-map.js';

export default class Service1 {
  public addKey(key: number, value: string) {
    const myMap = MyMap.get();
    myMap.map.set(key, value);
    console.log(myMap.map);
  }
}
