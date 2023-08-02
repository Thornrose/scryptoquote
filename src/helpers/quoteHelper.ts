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

type QuoteData = { content: string; author: string; length: number };

export const mockQuote: QuoteData = {
  content: `You can't make a tomlette without breaking some Gregs.`,
  author: 'Tom Wambsgans',
  length: 54,
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
