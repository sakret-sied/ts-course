import { ImageFormatEnum } from '../enums/image-format-enum.js';
import ImageConversionInterface from '../interfaces/image-conversion-interface.js';
import ResolutionInterface from '../interfaces/resolution-interface.js';

export default class ImageBuilder {
  private formats: ImageFormatEnum[] = [];
  private resolutions: ResolutionInterface[] = [];

  public addPng() {
    if (this.formats.includes(ImageFormatEnum.Png)) {
      return this;
    }
    this.formats.push(ImageFormatEnum.Png);
    return this;
  }

  public addJpeg() {
    if (this.formats.includes(ImageFormatEnum.Jpeg)) {
      return this;
    }
    this.formats.push(ImageFormatEnum.Jpeg);
    return this;
  }

  public addResolution(width: number, height: number) {
    this.resolutions.push({ width, height });
    return this;
  }

  public build(): ImageConversionInterface[] {
    const res: ImageConversionInterface[] = [];
    for (const r of this.resolutions) {
      for (const f of this.formats) {
        res.push({ format: f, width: r.width, height: r.height });
      }
    }
    return res;
  }
}
