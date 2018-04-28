// import {assert} from 'chai';
import {chai} from 'chai';
import {userResponses} from 'user-response';

const assert = chai.assert;
mocha.setup(`tdd`)
const userArrResponse = [1, 2, 3];
suite(`user responses`, () => {
  test(`txt`, () => {
    assert(userResponses('fdgfdfg'));
  });
});
mocha.run();
