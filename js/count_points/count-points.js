const COUNT_RULES = {
  /**
   * Правильный ответ: correctAnswer
   * Быстрый ответ: quickAnswer
   * Медленный ответ: slowResponse
   * За каждую оставшуюся к концу игры жизнь: remainingLife
   * */
  correctAnswer: 100,
  quickAnswer: 50,
  slowResponse: 50,
  remainingLife: 50,
  fastTime: 10,
  slowResponseTime: 20
  // slowResponseTime: 50
};

export const countPoints = (answers = [], life = 3) => {

  let points = 0;
  if (answers.length < 10 || answers.length > 10 || life === 0) {
    return -1;
  }
  for (let i = 0; i < answers.length; i++) {
    let currentAnswer = answers[i];
    if (currentAnswer.correctAnswer) {
      points += COUNT_RULES.correctAnswer;
      if (currentAnswer.time <= COUNT_RULES.fastTime) {
        points += COUNT_RULES.quickAnswer;
      } else if (currentAnswer.time > COUNT_RULES.slowResponseTime) {
        points -= COUNT_RULES.slowResponse;
      }
    } else {
      points -= COUNT_RULES.slowResponse;
    }
  }

  if (answers.length === 10) {
    let resultLifeBonus = COUNT_RULES.remainingLife * life;
    points += resultLifeBonus;
  }
  return points;
};
