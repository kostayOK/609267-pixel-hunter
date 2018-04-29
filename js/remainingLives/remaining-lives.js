/**
 * remainingLives - оставшихся жизней*/

export const remainingLives = (num) => {
  if (typeof num !== `number`) {
    throw new Error(`not number not ok`);
  }
  return num;
};
