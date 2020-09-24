'use strict';

const NAMES_WIZARDS = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

const SURNAMES_WIZARDS = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

const COATS_COLOR_WIZARDS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

const EYES_COLOR_WIZARDS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

const SIMILAR_WIZARDS = [];
const SIMILAR_WIZARD_TEMLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const WIZARDS_FRAGMET = document.createDocumentFragment();
const SETUP_SIMILAR_LIST = document.querySelector('.setup-similar-list');

const createSimilarWizards = function (name, surname, coatColor, eyesColor) {
  let wizard = {};
  wizard.name = `${name} ${surname}`;
  wizard.coatColor = `${coatColor}`;
  wizard.eyesColor = `${eyesColor}`;

  return wizard;
};

const renderWizards = function (wizard) {
  let wizardFragment = SIMILAR_WIZARD_TEMLATE.cloneNode(true);
  SIMILAR_WIZARD_TEMLATE.querySelector('.setup-similar-label').textContent = wizard.name;
  SIMILAR_WIZARD_TEMLATE.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  SIMILAR_WIZARD_TEMLATE.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardFragment;
};

const fillBlock = function (wrap, content) {
  wrap.appendChild(content);
};

for (let i = 0; i < 4; i++) {
  SIMILAR_WIZARDS[i] = createSimilarWizards(NAMES_WIZARDS[i], SURNAMES_WIZARDS[i], COATS_COLOR_WIZARDS[i], EYES_COLOR_WIZARDS[i]);
};

for (let i = 0; i < SIMILAR_WIZARDS.length; i++) {
  WIZARDS_FRAGMET.appendChild(renderWizards(SIMILAR_WIZARDS[i]));
};

fillBlock(SETUP_SIMILAR_LIST, WIZARDS_FRAGMET);

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

