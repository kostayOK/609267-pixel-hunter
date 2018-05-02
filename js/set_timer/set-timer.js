export const setTimer = (t) => {
  let timer = {
    time: t,
    completed: 0,
    tick() {
      this.time--;

      if (this.time <= 0) {
        this.onComplete();
      }
    },
    onComplete() {
      this.completed = 1;
    }
  };

  return timer;
};
