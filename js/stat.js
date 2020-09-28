'use strict';

const Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10,
  GAP: 10,
  TEXT_X: 110,
  TEXT_Y: 20
};

const Bar = {
  WIDTH: 40,
  HEIGHT: 150,
  GAP: 50,
  TEXT_TOP: 75
};

const TEXT_HEIGHT = 15;

const drawRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color || `#000000`;
  ctx.fillRect(x, y, width, height);
};

const drawText = function (ctx, x, y, text, color) {
  ctx.fillStyle = color || `#000000`;
  ctx.font = `16px "PT Mono", monospace`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(text, x, y);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  drawRect(ctx, Cloud.X + Cloud.GAP, Cloud.Y + Cloud.GAP, Cloud.WIDTH, Cloud.HEIGHT, `black`);
  drawRect(ctx, Cloud.X, Cloud.Y, Cloud.WIDTH, Cloud.HEIGHT, `#fff`);
  drawText(ctx, Cloud.TEXT_X, Cloud.TEXT_Y, `Ура вы победили!`);
  drawText(ctx, Cloud.TEXT_X, Cloud.TEXT_Y + TEXT_HEIGHT, `Список результатов:`, `16px "PT Mono", monospace`);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    let saturation = Math.ceil(Math.random() * 100);
    let barHeightPlayer = Math.ceil((Bar.HEIGHT * times[i]) / maxTime);
    let x = Cloud.TEXT_X + (Bar.WIDTH + Bar.GAP) * i;
    let y = Bar.TEXT_TOP + Bar.HEIGHT - barHeightPlayer;

    drawText(ctx, x, y, Math.ceil(times[i]));
    drawText(ctx, x, Bar.TEXT_TOP + Bar.HEIGHT + TEXT_HEIGHT + Cloud.GAP, names[i]);
    drawRect(ctx, x, y + TEXT_HEIGHT, Bar.WIDTH, barHeightPlayer, names[i] === `Вы` ? ctx.fillStyle = `rgba(255, 0, 0, 1)` : ctx.fillStyle = `hsl(240, ${saturation}%, 50%)`);
  }
};
