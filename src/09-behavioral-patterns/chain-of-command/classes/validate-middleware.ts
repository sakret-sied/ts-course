import AbstractMiddleware from './abstract-middleware.js';

export default class ValidateMiddleware extends AbstractMiddleware {
  public override handle(request: any) {
    console.log('ValidateMiddleware');
    if (request.body === 1) {
      return super.handle(request);
    }
    return { error: 'No body' };
  }
}
