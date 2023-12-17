const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateComment = () => {
  const commentsList = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];

  const randomIndex = getRandomInt(0, commentsList.length - 1);
  const comment = commentsList[randomIndex];

  const avatarNumber = getRandomInt(1, 6);
  const commentObj = {
    id: getRandomInt(1, 1000),
    avatar: `img/avatar-${avatarNumber}.svg`,
    message: comment,
    name: generateRandomName(), // функция для генерации случайного имени
  };

  return commentObj;
};

const generateRandomName = () => {
  const names = ['Анна', 'Иван', 'Елена', 'Дмитрий', 'Ольга', 'Павел', 'Мария', 'Сергей', 'Наталья', 'Александр'];
  const randomIndex = getRandomInt(0, names.length - 1);
  return names[randomIndex];
};

const generatePhotos = () => {
  const photos = [];
  const usedIds = new Set();
  const usedUrls = new Set();

  for (let i = 1; i <= 25; i++) {
    let id = getRandomInt(1, 25);
    while (usedIds.has(id)) {
      id = getRandomInt(1, 25);
    }
    usedIds.add(id);

    let url = `photos/${i}.jpg`;
    while (usedUrls.has(url)) {
      url = `photos/${i}.jpg`;
    }
    usedUrls.add(url);

    const photo = {
      id: id,
      url: url,
      description: `Описание фото ${i}`,
      likes: getRandomInt(15, 200),
      comments: [],
    };

    const numComments = getRandomInt(0, 30);
    for (let j = 0; j < numComments; j++) {
      photo.comments.push(generateComment());
    }

    photos.push(photo);
  }

  return photos;
};

// Генерация массива объектов фотографий
const photoArray = generatePhotos();
console.log(photoArray); // Вывод массива в консоль (можно использовать иначе)
