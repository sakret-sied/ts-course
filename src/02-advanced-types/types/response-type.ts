import ResponseFailedInterface from '../interfaces/response-failed-interface.js';
import ResponseSuccessInterface from '../interfaces/response-success-interface.js';

export type ResponseType = ResponseFailedInterface | ResponseSuccessInterface;
