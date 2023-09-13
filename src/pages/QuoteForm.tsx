import LetterList from './LetterList';

type PuzzleProps = {
  puzzle: string[];
};

export default function QuoteForm(props: PuzzleProps) {
  const { puzzle } = props;
  return (
    <form>
      <LetterList puzzle={puzzle} />
    </form>
  );
}
