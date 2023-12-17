import { generateComment, getRandomInt } from './utils.js';

export const generatePhotos = () => {
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
