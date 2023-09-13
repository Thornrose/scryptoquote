/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuidv4 } from 'uuid';

import LetterListItem from './LetterListItem';

type PuzzleArrayProps = {
  puzzle: string[];
};

export default function LetterList(props: PuzzleArrayProps) {
  const { puzzle } = props;

  const letters = puzzle.map((letter) => {
    return <LetterListItem key={uuidv4()} quoteLetter={letter} />;
  });

  return (
    <ul className="flex flex-row flex-wrap justify-center gap-x-2 p-8 font-pangolin text-4xl">
      {letters}
    </ul>
  );
}
