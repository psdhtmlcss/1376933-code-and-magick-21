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

const FIREBALL_COLOR_WIZARDS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

const MAX_COUNT = 4;
const similarWizards = [];
const wizardsFragment = document.createDocumentFragment();
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const setupSimilarList = document.querySelector('.setup-similar-list');
const setup = document.querySelector('.setup');
const setupOpen = document.querySelector('.setup-open');
const setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
const setupUserName = setup.querySelector('.setup-user-name');
const setupClose = setup.querySelector('.setup-close');
const setupWizardCoatColor = setup.querySelector('.setup-wizard .wizard-coat');
const setupWizardEyesColor = setup.querySelector('.setup-wizard .wizard-eyes');
const setupWizardFireballColor = setup.querySelector('.setup-fireball-wrap');
const inputCoatColor = setup.querySelector('input[name="coat-color"]');
const inputEyesColor = setup.querySelector('input[name="eyes-color"]');
const inputFireballColor = setup.querySelector('input[name="fireball-color"]');

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

// Открытие/закрытие окна
const openModal = () => {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onKeyPressEscape);
  document.addEventListener('keydown', onKeyPressEnter);
};

const closeModal = () => {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onKeyPressEscape);
  document.removeEventListener('keydown', onKeyPressEnter);
};

const onKeyPressEnter = (evt) => {
  if (evt.key === 'Enter' && evt.target === setupClose) {
    evt.preventDefault();
    closeModal();
  }
};

const onKeyPressEscape = (evt) => {
  if (evt.key === 'Escape' && evt.target !== setupUserName) {
    evt.preventDefault();
    closeModal();
  }
};

document.addEventListener('keydown', function(evt) {
  if (evt.key === 'Enter' && evt.target === setupOpenIcon) {
    openModal();
  }
});

setupOpen.addEventListener('click', function () {
  openModal();
});

setupClose.addEventListener('click', function() {
  closeModal();
});

// Изменение цвета
const changeColor = (colors, element, input, prop) => {
  let bg = colors[getRandom(0, colors.length - 1)];
  element.setAttribute(`style`, `${prop}: ${bg}`);
  input.value = bg;
};

setupWizardCoatColor.addEventListener('click', function () {
  changeColor(COATS_COLOR_WIZARDS, setupWizardCoatColor, inputCoatColor, `fill`);
});

setupWizardEyesColor.addEventListener('click', function () {
  changeColor(EYES_COLOR_WIZARDS, setupWizardEyesColor, inputEyesColor, `fill`);
});

setupWizardFireballColor.addEventListener('click', function () {
  changeColor(FIREBALL_COLOR_WIZARDS, setupWizardFireballColor, inputFireballColor, `background`);
});

document.querySelector('.setup-similar').classList.remove('hidden');

