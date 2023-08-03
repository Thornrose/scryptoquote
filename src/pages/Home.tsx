import { useState, useEffect } from 'react';

import {
  parseQuote,
  alphabetShuffle,
  alphabetArray,
} from '../helpers/quoteHelper';

const url: string = `https://api.quotable.io/random/`;

function Home() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // for testing:
  const mockQuote = {
    content: `You can't make a tomlette without breaking some Gregs.`,
    author: 'Tom Wambsgans',
  };

  // remember that because this is being done outside of useEffect, it's being done twice due to mounting
  const quoteArray = parseQuote(mockQuote.content, mockQuote.author);

  const [shuffledAlphabet, usedIndexes] = alphabetShuffle(alphabetArray);

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
      <h1>Hello!</h1>
      <div>{quote}</div>
      <div>{author}</div>
      <br />
      <div>{quoteArray}</div>
      <div>{shuffledAlphabet.join(', ')}</div>
      <div>{usedIndexes.join(', ')}</div>
    </>
  );
}

export default Home;
