'use strict';

var NAMES = ['Лютик', 'Дейнерис', 'Юлианна', 'Леонардо'];
var COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.'];

var getRandomNumber = function (min, max) {
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
};

var getRandomValue = function (element) {
  return element[getRandomNumber(0, element.length - 1)];
};

var addComments = function () {
  var count = getRandomNumber(1, 100);
  var valueRange = [];
  for (var i = 0; i < count; i++) {
    valueRange[i] = getRandomValue(COMMENTS);
  }
  return valueRange;
};

var getComment = function (count) {
  var сomments = [];
  for (var i = 0; i < count; i++) {
    var comment = {
      avatar: 'img/avatar-' + getRandomNumber(0, 6) + '.svg',
      message: addComments(COMMENTS),
      name: getRandomValue(NAMES),
    };
    сomments[i] = comment;
  }
  return сomments;
};

var getPhotos = function () {
  var contents = [];
  for (var i = 0; i < 25; i++) {
    var infoPhotos = {
      url: 'photos/' + (i + 1) + '.jpg',
      description: '',
      likes: getRandomNumber(15, 200),
      comments: getComment(getRandomNumber(0, 6)),
    };
    contents[i] = infoPhotos;
  }
  return contents;
};

var templePicture = document.querySelector('#picture').content.querySelector('.picture');

var renderPicture = function (picture) {
  var pictureElement = templePicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;

  return pictureElement;
};

var contentPhotos = getPhotos();

var pictureElement = document.createDocumentFragment();

var pictures = document.querySelector('.pictures');

for (var i = 0; i < contentPhotos.length; i++) {
  pictureElement.appendChild(renderPicture(contentPhotos[i]));
}

pictures.appendChild(pictureElement);
