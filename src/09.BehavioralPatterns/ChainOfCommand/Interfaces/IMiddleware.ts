export default interface IMiddleware {
  next(middleware: IMiddleware): IMiddleware;

  handle(request: any): any;
}
