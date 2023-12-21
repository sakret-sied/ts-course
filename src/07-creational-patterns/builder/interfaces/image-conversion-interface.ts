import { ImageFormatEnum } from '../enums/image-format-enum.js';
import ResolutionInterface from './resolution-interface.js';

export default interface ImageConversionInterface extends ResolutionInterface {
  format: ImageFormatEnum;
}
