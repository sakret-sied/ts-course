import ImageBuilder from './Classes/ImageBuilder.js';

console.log(
  new ImageBuilder()
    .addJpeg()
    .addPng()
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build()
);
