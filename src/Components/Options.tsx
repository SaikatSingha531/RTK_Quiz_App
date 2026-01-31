import { answerAndNext } from "../Hooks/Redux_Toolkit/Slice/Quiz.slice";
import { useAppdispatch } from "../Hooks/Utils/Redux";

const Options = ({ options = [] }: { options: string[] }) => {
  const dispatch = useAppdispatch();

  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => dispatch(answerAndNext(option))}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
