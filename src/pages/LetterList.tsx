/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuidv4 } from 'uuid';

import LetterListItem from './LetterListItem';
import PunctuationListItem from './PunctuationListItem';

const regexPunctuation: RegExp = / |'|,|\.|&|-|!/g;
const regexNewline: RegExp = /\n/g;

type PuzzleArrayProps = {
  puzzle: string[];
};

export default function LetterList(props: PuzzleArrayProps) {
  const { puzzle } = props;

  const letters = puzzle.map((letter) => {
    if (letter.match(regexPunctuation)) {
      return <PunctuationListItem key={uuidv4()} quoteLetter={letter} />;
    }
    if (letter.match(regexNewline)) {
      return <div key={uuidv4()} className="w-full" />;
    }
    return <LetterListItem key={uuidv4()} quoteLetter={letter} />;
  });

  return (
    <ul className="flex flex-row flex-wrap justify-center gap-x-2 p-4 font-pangolin text-4xl">
      {letters}
    </ul>
  );
}
