import Log from './log.js';
import Notify from './notify.js';
import Template from './template.js';

export default class NotificationFacade {
  private notify: Notify;
  private logger: Log;
  private template: Template;

  constructor() {
    this.notify = new Notify();
    this.logger = new Log();
    this.template = new Template();
  }

  public send(to: string, templateName: string) {
    const data = this.template.getByName(templateName);
    if (!data) {
      this.logger.log("Don't find");
      return;
    }
    this.notify.send(data.template, to);
    this.logger.log('Template sended');
  }
}
