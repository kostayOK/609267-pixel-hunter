import {assert} from 'chai';
import {scorePoints} from './score-points';

const x = 1;
const y = 2;
describe(`number of points`, () => {
  describe(`number points`, () => {
    it(`return number points`, () => {
      assert.equal(scorePoints(x, y), 3);
    });
    it(`not return number points`, () => {
      assert.throws((() => scorePoints(`strocka`, 3), /not number points not ok!!!/));
    });
  });
});
