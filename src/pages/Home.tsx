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
      <h1 className="m-8 flex justify-center font-pangolin text-2xl">
        scryptoquote
      </h1>
      <ul className="flex flex-row justify-center gap-x-2 p-8 font-pangolin text-4xl">
        <li className="flex flex-col text-center">
          <input className="flex w-9 justify-center bg-transparent text-center text-neutral-700 focus:outline-none" />
          <hr className="mb-1 h-1.5 rounded bg-cool-black/30" />
          <p className="text-cool-blue">Y</p>
        </li>
        <li className="flex flex-col text-center">
          <input className="flex w-9 justify-center bg-transparent text-center text-neutral-700 focus:outline-none" />
          <hr className="mb-1 h-1.5 rounded bg-cool-black/30" />
          <p className="text-cool-blue">O</p>
        </li>
        <li className="flex flex-col text-center">
          <input className="flex w-9 justify-center bg-transparent text-center text-neutral-700 focus:outline-none" />
          <hr className="mb-1 h-1.5 rounded bg-cool-black/30" />
          <p className="text-cool-blue">U</p>
        </li>
      </ul>
      <div className="font-pangolin">{quoteArray}</div>
      <div className="font-pangolin">{shuffledQuote}</div>
    </>
  );
}

export default Home;
