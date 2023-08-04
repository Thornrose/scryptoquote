import { useState, useEffect } from 'react';

import {
  QuoteData,
  alphabetArray,
  puzzleKey,
  parseQuote,
  alphabetShuffle,
  spotCheck,
  charMatch,
  quoteShuffle,
} from '../helpers/quoteHelper';

const url: string = `https://api.quotable.io/random/`;

function Home() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // for testing:
  const mockQuote: QuoteData = {
    content: `You can't make a tomlette without breaking some Gregs.`,
    author: 'Tom Wambsgans',
  };

  // remember that because this is being done outside of useEffect, it's being done twice due to mounting
  const quoteArray: string[] = parseQuote(mockQuote.content, mockQuote.author);

  const shuffledAlphabet = alphabetShuffle(alphabetArray);
  spotCheck(alphabetArray, shuffledAlphabet);
  charMatch(alphabetArray, shuffledAlphabet);
  // console.log(puzzleKey);

  const shuffledQuote = quoteShuffle(quoteArray, puzzleKey);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      result.json().then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
        <div>
          <p className="text-slate-500">{quote}</p>
          <div className="text-xl font-medium text-black">{author}</div>
        </div>
      </div>
      <br />
      <div>{quoteArray}</div>
      <div>{shuffledQuote}</div>
      <div>{alphabetArray.join(', ')}</div>
      <div>{shuffledAlphabet.join(', ')}</div>
    </>
  );
}

export default Home;
