import LetterListItem from './LetterListItem';

type PuzzleArrayProps = {
  puzzle: string[];
};

export default function LetterList(props: PuzzleArrayProps) {
  const { puzzle } = props;

  const letters = puzzle.map((letter, index) => {
    return <LetterListItem key={index} quoteLetter={letter} />;
  });

  return (
    <ul className="flex flex-row flex-wrap justify-center gap-x-2 p-8 font-pangolin text-4xl">
      {letters}
    </ul>
  );
}
