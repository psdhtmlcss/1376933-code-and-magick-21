/* eslint-disable space-before-function-paren */
'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_GAP = 10;
const CLOUD_TEXT_X = CLOUD_X + CLOUD_GAP;
const CLOUD_TEXT_Y = CLOUD_Y + CLOUD_GAP;
const TEXT_HEIGHT = 15;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const BAR_GAP = 50;
const BAR_TEXT_TOP = 75;


const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, `black`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.fillStyle = `black`;
  ctx.font = `16px "PT Mono", monospace`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, CLOUD_TEXT_X, CLOUD_TEXT_Y);
  ctx.fillText(`Список результатов:`, CLOUD_TEXT_X, CLOUD_TEXT_Y + TEXT_HEIGHT);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = `black`;
    let barHeightPlayer = Math.ceil((BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillText(Math.ceil(times[i]), CLOUD_TEXT_X + (BAR_WIDTH + BAR_GAP) * i, BAR_TEXT_TOP + BAR_HEIGHT - barHeightPlayer);
    ctx.fillText(names[i], CLOUD_TEXT_X + (BAR_WIDTH + BAR_GAP) * i, BAR_TEXT_TOP + BAR_HEIGHT + TEXT_HEIGHT + CLOUD_GAP);
    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      let saturation = Math.ceil(Math.random() * 100);
      ctx.fillStyle = `hsl(240, ${saturation}%, 50%)`;
    }
    ctx.fillRect(CLOUD_TEXT_X + (BAR_WIDTH + BAR_GAP) * i, BAR_TEXT_TOP + TEXT_HEIGHT + BAR_HEIGHT - barHeightPlayer, BAR_WIDTH, barHeightPlayer);
  }
};
