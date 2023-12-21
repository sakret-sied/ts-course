import MiddlewareInterface from '../interfaces/middleware-interface.js';

export default abstract class AbstractMiddleware
  implements MiddlewareInterface
{
  private nextMiddleware: MiddlewareInterface;

  public next(middleware: MiddlewareInterface): MiddlewareInterface {
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
