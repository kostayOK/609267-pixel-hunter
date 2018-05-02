import {assert} from "chai";
import {setTimer} from "./set-timer";
describe(`Setup and check timer`, () => {
  it(`should set correct time.`, () => {
    let timer = setTimer(19);
    assert.equal(timer.time, 19);
  });

  it(`should ticks.`, () => {
    let timer = setTimer(19);
    timer.tick();
    assert.equal(timer.time, 18);
  });

  it(`should complete`, () => {
    let timer = setTimer(1);
    timer.tick();
    assert.equal(timer.completed, 1);
  });
});
