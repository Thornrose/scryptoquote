import { useState, useEffect } from 'react';

// import getApi from '../helpers/fetchQuote';

const url: string = `https://api.quotable.io/random/`;

function Home() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

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
    </>
  );
}

export default Home;
