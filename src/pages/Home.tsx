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
import Header from './Header';
import QuoteForm from './QuoteForm';

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
      <Header />
      <main>
        <section>
          <QuoteForm />
        </section>
      </main>
    </>
  );
}

export default Home;
