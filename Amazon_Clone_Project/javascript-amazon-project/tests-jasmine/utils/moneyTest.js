import {formatCurrency} from "../../scripts/utils/money.js";

// How you name a test suite in Jasmine
describe('TEST SUITE: FORMAT CURRENCY', () => {
    it('TEST 1- Converts cents to dollars:', () => {
      expect(formatCurrency(2095)).toEqual('20.95');

    });

    it('TEST 2- Converts cents to dollars (0 edge case):', () => {
      expect(formatCurrency(0)).toEqual('0.00');
    });

    it('TEST 3- Converts cents to dollars (rounds up to nearest cent):', () => {
      expect(formatCurrency(2000.5)).toEqual('20.01');
    });
  }
) 
// Note that is also possible to nest describe() inside another describe()