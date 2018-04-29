// import {assert} from 'chai';
import chai from 'chai';
import {userResponses} from './user-response';

const assert = chai.assert;

const userArrResponse = [1, 2, 3];
describe(`Array`, () => {
  describe(`user responses`, () => {
    it(`the input accepts an array ok`, () => {
      assert(userResponses(userArrResponse));
    });
    it(`not Array`, () => {
      // assert.throws(() => userResponses(`strocka`), /not Array not ok/);
      assert.throws((() => userResponses(`strocka`), /not Array not ok!!!/));
    });
  });
});

