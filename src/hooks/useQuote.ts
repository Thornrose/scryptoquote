import { useState, useEffect } from 'react';

import {
  alphabetArray,
  puzzleKey,
  parseQuote,
  alphabetShuffle,
  spotCheck,
  charMatch,
  quoteShuffle,
} from '../helpers/quoteHelper';

export default function useQuote(url: string) {
  const [puzzle, setPuzzle] = useState<string[]>([]);
  const [tempQuote, setTempQuote] = useState<string[]>([]); // TEMP FOR TESTING

  const shuffledAlphabet = alphabetShuffle(alphabetArray);
  spotCheck(alphabetArray, shuffledAlphabet);
  charMatch(alphabetArray, shuffledAlphabet);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      result.json().then((data) => {
        const quoteArray: string[] = parseQuote(data.content, data.author);
        const shuffledQuote = quoteShuffle(quoteArray, puzzleKey);
        setPuzzle(shuffledQuote);
        setTempQuote(quoteArray);
      });
    };
    fetchData();
  }, [url]);

  return { puzzle, tempQuote };
}
