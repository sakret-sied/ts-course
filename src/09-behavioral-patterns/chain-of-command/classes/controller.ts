import AbstractMiddleware from './abstract-middleware.js';

export default class Controller extends AbstractMiddleware {
  public override handle(request: any) {
    console.log('Controller');
    return { success: request };
  }
}
