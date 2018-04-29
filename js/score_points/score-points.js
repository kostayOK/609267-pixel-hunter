/**
 * scorePoints - набранных очков*/

export const scorePoints = (x, y) => {
  if (typeof x !== `number` && typeof y !== `number`) {
    throw new Error(`not Array not ok`);
  }
  return x + y;
};
