import { ImageFormat } from '../Enums/ImageFormat.js';
import IImageConversion from '../Interfaces/IImageConversion.js';
import IResolution from '../Interfaces/IResolution.js';

export default class ImageBuilder {
  private formats: ImageFormat[] = [];
  private resolutions: IResolution[] = [];

  public addPng() {
    if (this.formats.includes(ImageFormat.Png)) {
      return this;
    }
    this.formats.push(ImageFormat.Png);
    return this;
  }

  public addJpeg() {
    if (this.formats.includes(ImageFormat.Jpeg)) {
      return this;
    }
    this.formats.push(ImageFormat.Jpeg);
    return this;
  }

  public addResolution(width: number, height: number) {
    this.resolutions.push({ width, height });
    return this;
  }

  public build(): IImageConversion[] {
    const res: IImageConversion[] = [];
    for (const r of this.resolutions) {
      for (const f of this.formats) {
        res.push({ format: f, width: r.width, height: r.height });
      }
    }
    return res;
  }
}
