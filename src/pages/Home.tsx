import useQuote from '../hooks/useQuote';

import Header from './Header';
import QuoteForm from './QuoteForm';

const url: string = `https://api.quotable.io/random/`;

function Home() {
  const { puzzle, tempQuote } = useQuote(url);

  return (
    <>
      <Header />
      <main>
        <section>
          <QuoteForm puzzle={puzzle} />
        </section>
        <section>
          <div>{puzzle}</div>
          <div>{tempQuote}</div>
        </section>
      </main>
    </>
  );
}

export default Home;
