export default class Template {
  private templates = [{ name: 'other', template: '<h1>Template!</h1>' }];

  public getByName(name: string) {
    return this.templates.find((t) => t.name === name);
  }
}
