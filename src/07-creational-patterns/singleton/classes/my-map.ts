export default class MyMap {
  public map: Map<number, string> = new Map();

  private static instance: MyMap;

  private constructor() {}

  public clean() {
    this.map = new Map();
  }

  public static get(): MyMap {
    if (!MyMap.instance) {
      MyMap.instance = new MyMap();
    }
    return MyMap.instance;
  }
}
