import LetterListItem from './LetterListItem';

export default function LetterList() {
  return (
    <ul className="flex flex-row justify-center gap-x-2 p-8 font-pangolin text-4xl">
      <LetterListItem />
      <LetterListItem />
      <LetterListItem />
    </ul>
  );
}
