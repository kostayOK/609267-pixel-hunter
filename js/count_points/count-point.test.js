import {assert} from 'chai';
import {countPoints} from './count-points';


describe(`Count game points`, () => {
  const notEnoghAnswers = [
    {
      correctAnswer: false,
      time: 35
    },
    {
      correctAnswer: true,
      time: 25
    },
    {
      correctAnswer: false,
      time: 35
    },
    {
      correctAnswer: false,
      time: 35
    }
  ];
  it(`should return -1. Not enough answers.`, () => {
    let points = countPoints(notEnoghAnswers);
    assert.equal(points, -1);
  });
  const aLotOfAnswers = [
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    }
  ];
  it(`should return -1. A lot of answers.`, () => {
    let points = countPoints(aLotOfAnswers, 3);
    assert.equal(points, -1);
  });
  it(`should return -1. No parameters.`, () => {
    let points = countPoints();
    assert.equal(points, -1);
  });
  const allCorrectAnswers = [
    {
      correctAnswer: true,
      time: 25
    },
    {
      correctAnswer: true,
      time: 25
    }, {
      correctAnswer: true,
      time: 25
    }, {
      correctAnswer: true,
      time: 25
    }, {
      correctAnswer: true,
      time: 25
    }, {
      correctAnswer: true,
      time: 25
    }, {
      correctAnswer: true,
      time: 25
    }, {
      correctAnswer: true,
      time: 25
    }, {
      correctAnswer: true,
      time: 25
    }, {
      correctAnswer: true,
      time: 25
    }
  ];
  it(`should return -1. not 3 life .`, () => {
    let points = countPoints(allCorrectAnswers, 0);
    assert.equal(points, -1);
  });
  const allCorrectAnswersAndSlow = [
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    },
    {correctAnswer: true, time: 35}, {
      correctAnswer: true, time: 35
    }, {
      correctAnswer: true, time: 35
    }, {
      correctAnswer: true,
      time: 35
    },
    {
      correctAnswer: true,
      time: 35
    }
  ];
  it(`should return 10. All correct and slow. + life  `, () => {
    let points = countPoints(allCorrectAnswersAndSlow, 3);
    assert.equal(points, 650);
  });
  const randomAnswers = [
    {
      correctAnswer: true, // 150
      time: 10
    },
    {
      correctAnswer: true, // 50
      time: 22
    }, {
      correctAnswer: true, // 50
      time: 23
    }, {
      correctAnswer: true, // 50
      time: 25
    }, {
      correctAnswer: false, // -50
      time: 25
    }, {
      correctAnswer: true, // 150
      time: 8
    }, {
      correctAnswer: false, // -50
      time: 25
    }, {
      correctAnswer: true, // 50
      time: 24
    }, {
      correctAnswer: true, // 150
      time: 7
    }, {
      correctAnswer: true, // 50
      time: 25
    }
  ];
  it(`should return 700. and life 1 + 50.`, () => {
    let points = countPoints(randomAnswers, 1);
    assert.equal(points, 750);
  });

});
