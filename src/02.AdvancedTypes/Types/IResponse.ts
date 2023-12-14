import IResponseFailed from '../Interfaces/IResponseFailed.js';
import IResponseSuccess from '../Interfaces/IResponseSuccess.js';

export type IResponse = IResponseFailed | IResponseSuccess;
