import MyMap from './my-map.js';

export default class Service2 {
  public getKey(key: number) {
    const myMap = MyMap.get();
    myMap.map.get(key);
    console.log(myMap.map);
  }
}
