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

const MAX_COUNT = 4;
const similarWizards = [];
const wizardsFragment = document.createDocumentFragment();
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const setupSimilarList = document.querySelector('.setup-similar-list');

function getRandom(min, max) {
  let x = Math.floor(Math.random() * (max - min) + min);
  return x;
};

const createSimilarWizards = function (name, surname, coatColor, eyesColor) {
  let wizard = {};
  wizard.name = `${name[getRandom(0, name.length - 1)]} ${surname[getRandom(0, surname.length - 1)]}`;
  wizard.coatColor = `${coatColor[getRandom(0, coatColor.length - 1)]}`;
  wizard.eyesColor = `${eyesColor[getRandom(0, eyesColor.length - 1)]}`;

  return wizard;
};

const renderWizards = function (wizard) {
  let wizardFragment = similarWizardTemplate.cloneNode(true);
  similarWizardTemplate.querySelector('.setup-similar-label').textContent = wizard.name;
  similarWizardTemplate.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  similarWizardTemplate.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardFragment;
};

const addWizards = () => {
  for (let i = 0; i < MAX_COUNT; i++) {
    similarWizards[i] = createSimilarWizards(NAMES_WIZARDS, SURNAMES_WIZARDS, COATS_COLOR_WIZARDS, EYES_COLOR_WIZARDS);
  }
};

const pasteWizards = () => {
  for (let i = 0; i < similarWizards.length; i++) {
    wizardsFragment.appendChild(renderWizards(similarWizards[i]));
  }
};

const fillBlock = function (wrap, content) {
  wrap.appendChild(content);
};

addWizards();
pasteWizards();
fillBlock(setupSimilarList, wizardsFragment);

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

