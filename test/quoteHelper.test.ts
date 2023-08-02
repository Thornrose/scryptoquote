import { describe, it } from 'vitest';

import { mockQuote, alphabetArray } from '../src/helpers/quoteHelper';

describe('Mock Data', () => {
  it('has the correct keys', () => {
    expect(mockQuote).toHaveProperty('content');
    expect(mockQuote).toHaveProperty('author');
    expect(mockQuote).toHaveProperty('length');
  });
  it('has the expected data', () => {
    expect(mockQuote.content).toStrictEqual(
      `You can't make a tomlette without breaking some Gregs.`
    );
    expect(mockQuote.author).toStrictEqual('Tom Wambsgans');
    expect(mockQuote.length).toStrictEqual(54);
  });
});

describe('Alphabet array', () => {
  it('should have a length of 26', () => {
    expect(alphabetArray).toHaveLength(26);
  });
});
