import AbstractMiddleware from './AbstractMiddleware.js';

export default class AuthMiddleware extends AbstractMiddleware {
  public override handle(request: any) {
    console.log('AuthMiddleware');
    if (request.userId === 1) {
      return super.handle(request);
    }
    return { error: 'No body' };
  }
}
