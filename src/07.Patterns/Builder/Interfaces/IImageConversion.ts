import { ImageFormat } from '../Enums/ImageFormat.js';
import IResolution from './IResolution.js';

export default interface IImageConversion extends IResolution {
  format: ImageFormat;
}
