export default interface MiddlewareInterface {
  next(middleware: MiddlewareInterface): MiddlewareInterface;

  handle(request: any): any;
}
