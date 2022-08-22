import { FibonachiService } from '../src/services/FibonachiService';

describe("Evaluate fibonachi sequence", () => {
  test("Check evaluated value", () => {
    expect( FibonachiService.evaluate(36)).toEqual(9227465);
  });
  test("Check Bignumber evaluated value", () => {
    expect( FibonachiService.evaluate(127)).toBeCloseTo(9.615185546301842e+25);
  });
});
