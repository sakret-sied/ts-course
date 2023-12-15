export default class MyMap {
  private static instance: MyMap;

  map: Map<number, string> = new Map();

  private constructor() {}

  clean() {
    this.map = new Map();
  }

  public static get(): MyMap {
    if (!MyMap.instance) {
      MyMap.instance = new MyMap();
    }
    return MyMap.instance;
  }
}
