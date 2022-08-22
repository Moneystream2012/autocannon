'use strict'

const BigNumber = require('big-number');

export class FibonachiService {
  static evaluate = (index: number): number => {
    let first: number = 0,
        last: number = 1,
        sum: number;

    for (let counter = 0; counter < index - 2; counter++) {
      // will use BigNumber, but for index >1.000.000.000 maybe need even not doubled precision 
      sum = BigNumber(first).plus(last);
      first = last;
      last = sum;
    }

    return Number(last.toString());
  }
}