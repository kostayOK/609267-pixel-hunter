import {assert} from 'chai';
import {remainingLives} from './remaining-lives';

let num = 2;
describe(`number`, () => {
  describe(`quantity of life`, () => {
    it(`request number`, () => {
      assert(remainingLives(num));
    });
    it(`not number`, () => {
      // assert.throws(() => userResponses(`strocka`), /not Array not ok/);
      assert.throws((() => remainingLives(`strocka`), /not number not ok!!!/));
    });
  });
});
