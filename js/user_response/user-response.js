/**
 * userResponses - ответов пользователя
 * remainingLives - оставшихся жизней
 * scorePoints - набранных очков*/

export const userResponses = (arr) => {
  if (Array.isArray(arr)) {
    return arr;
  }
  throw new Error(`not Array not ok`);
};
