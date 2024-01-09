import { useTextStore } from "./store";

const WordOutput = () => {
  const text = useTextStore((state) => state.text);

  const stripVowels = (str: string) => {
    return str.replace(/[aeiou]/gi, "");
  };

  return <div>{stripVowels(text)}</div>;
};

export default WordOutput;
