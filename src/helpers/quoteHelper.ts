/* 
 example json data structure:
{
  _id: "VsarQ0iEgE1",
  content: "Life isn't about finding yourself. Life is about creating yourself.",
  author: "Bernard Shaw",
  tags: [
  "Famous Quotes"
  ],
  authorSlug: "bernard-shaw",
  length: 67,
  dateAdded: "2021-03-28",
  dateModified: "2023-04-14"
} 
*/

// types and data

export type QuoteData = { content: string; author: string };

export type KeyHolder = {
  [index: string]: string;
};

export const puzzleKey: KeyHolder = {
  A: '',
  B: '',
  C: '',
  D: '',
  E: '',
  F: '',
  G: '',
  H: '',
  I: '',
  J: '',
  K: '',
  L: '',
  M: '',
  N: '',
  O: '',
  P: '',
  Q: '',
  R: '',
  S: '',
  T: '',
  U: '',
  V: '',
  W: '',
  X: '',
  Y: '',
  Z: '',
};

export const alphabetArray: string[] = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export function parseQuote(quote: string, author: string): string[] {
  const quoteText = quote.concat('\n - ', author).toUpperCase();
  return Array.from(quoteText);
}

export function alphabetShuffle(alphabet: string[]): string[] {
  const shuffledAlphabet: string[] = [];
  const usedIndexes: number[] = [];

  for (let i = 0; usedIndexes.length < alphabet.length; i += 1) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    if (!usedIndexes.includes(randomIndex)) {
      shuffledAlphabet.push(alphabet[randomIndex]);
      usedIndexes.push(randomIndex);
    }
  }

  return shuffledAlphabet;
}

export function spotCheck(
  alphabet: string[],
  shuffledAlphabet: string[]
): void {
  for (let i = 0; i < alphabet.length; i += 1) {
    if (shuffledAlphabet[i] === alphabet[i] && shuffledAlphabet[i] !== 'Z') {
      shuffledAlphabet.push(shuffledAlphabet.splice(i, 1)[0]);
      i -= 1;
    } else if (
      shuffledAlphabet[i] === alphabet[i] &&
      shuffledAlphabet[i] === 'Z'
    ) {
      shuffledAlphabet.unshift(shuffledAlphabet.splice(i, 1)[0]);
      i = 0;
    }
  }
}

export function charMatch(
  alphabet: string[],
  shuffledAlphabet: string[]
): void {
  alphabet.forEach((letter) => {
    puzzleKey[letter] = shuffledAlphabet[alphabet.indexOf(letter)];
  });
}

export function quoteShuffle(quote: string[], cipher: KeyHolder) {
  const shuffledQuote: string[] = [];
  for (let i = 0; i < quote.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(cipher, quote[i])) {
      shuffledQuote.push(cipher[quote[i]]);
    } else if (!Object.prototype.hasOwnProperty.call(cipher, quote[i])) {
      shuffledQuote.push(quote[i]);
    }
  }
  return shuffledQuote;
}

// if (
//   shuffledAlphabet[randomIndex] === alphabet[randomIndex] &&
//   randomIndex === 0
// ) {
//   shuffledAlphabet.push(shuffledAlphabet.splice(randomIndex, 1)[0]);
// } else if (
//   shuffledAlphabet[randomIndex] === alphabet[randomIndex] &&
//   randomIndex === alphabet.length - 1
// ) {
//   shuffledAlphabet.unshift(shuffledAlphabet.splice(randomIndex, 1)[0]);
// }
