import IMiddleware from '../Interfaces/IMiddleware.js';

export default abstract class AbstractMiddleware implements IMiddleware {
  private nextMiddleware: IMiddleware;

  public next(middleware: IMiddleware): IMiddleware {
    this.nextMiddleware = middleware;
    return middleware;
  }

  public handle(request: any) {
    if (this.nextMiddleware) {
      return this.nextMiddleware.handle(request);
    }
    return;
  }
}
