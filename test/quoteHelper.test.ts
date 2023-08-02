import { describe, it, expect } from 'vitest';

import {
  QuoteData,
  alphabetArray,
  parseQuote,
} from '../src/helpers/quoteHelper';

const mockQuote: QuoteData = {
  content: `You can't make a tomlette without breaking some Gregs.`,
  author: 'Tom Wambsgans',
};

describe('Alphabet array', () => {
  it('should have a length of 26', () => {
    expect(alphabetArray).toHaveLength(26);
  });
});

describe('parseQuote function', () => {
  it('should return quote with author in proper format', () => {
    expect(parseQuote(mockQuote.content, mockQuote.author)).toStrictEqual([
      'Y',
      'O',
      'U',
      ' ',
      'C',
      'A',
      'N',
      `'`,
      'T',
      ' ',
      'M',
      'A',
      'K',
      'E',
      ' ',
      'A',
      ' ',
      'T',
      'O',
      'M',
      'L',
      'E',
      'T',
      'T',
      'E',
      ' ',
      'W',
      'I',
      'T',
      'H',
      'O',
      'U',
      'T',
      ' ',
      'B',
      'R',
      'E',
      'A',
      'K',
      'I',
      'N',
      'G',
      ' ',
      'S',
      'O',
      'M',
      'E',
      ' ',
      'G',
      'R',
      'E',
      'G',
      'S',
      '.',
      ' ',
      '-',
      ' ',
      'T',
      'O',
      'M',
      ' ',
      'W',
      'A',
      'M',
      'B',
      'S',
      'G',
      'A',
      'N',
      'S',
    ]);
  });
});
