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

// mock data

export type QuoteData = { content: string; author: string };

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

// = mockQuote.content.concat(' -', mockQuote.author);
export function parseQuote(quote: string, author: string): string[] {
  const quoteText = quote.concat(' - ', author).toUpperCase();
  return Array.from(quoteText);
}

export function alphabetShuffle(
  alphabet: string[]
): [shuffledAlphabet: string[], usedIndexes: number[]] {
  const shuffledAlphabet: string[] = [];
  const usedIndexes: number[] = [];

  for (let i = 0; usedIndexes.length < alphabet.length; i += 1) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    if (!usedIndexes.includes(randomIndex)) {
      shuffledAlphabet.push(alphabet[randomIndex]);
      usedIndexes.push(randomIndex);
    }
  }
  return [shuffledAlphabet, usedIndexes];
}
