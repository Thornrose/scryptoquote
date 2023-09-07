type LetterProps = {
  quoteLetter: string;
};

export default function LetterListItem(props: LetterProps) {
  const { quoteLetter } = props;
  return (
    <li className="flex flex-col text-center">
      <input
        className="flex w-9 justify-center bg-transparent text-center uppercase text-neutral-700 focus:outline-none"
        type="text"
        maxLength={1}
      />
      <hr className="mb-1 h-1.5 rounded bg-cool-black/30" />
      <p className="text-cool-blue">{quoteLetter}</p>
    </li>
  );
}
