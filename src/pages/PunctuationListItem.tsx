type LetterProps = {
  quoteLetter: string;
};

export default function PunctuationListItem(props: LetterProps) {
  const { quoteLetter } = props;
  return (
    <li className="flex flex-col text-center">
      <p className="mx-1 whitespace-break-spaces text-cool-blue">
        {quoteLetter}
      </p>
    </li>
  );
}
