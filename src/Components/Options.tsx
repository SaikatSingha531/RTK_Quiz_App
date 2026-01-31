import { answerAndNext } from "../Hooks/Redux_Toolkit/Slice/Quiz.slice";
import { useAppdispatch } from "../Hooks/Utils/Redux";

const Options = ({ options = [] }: { options: string[] }) => {
  const dispatch = useAppdispatch();

  return (
    <div className="grid grid-cols-1 gap-4">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => dispatch(answerAndNext(option))}
          className="
            w-full px-5 py-3 rounded-lg text-left
            bg-blue-950 border border-blue-800
            hover:bg-blue-900 hover:border-blue-600
            transition-all duration-200
            text-blue-100 hover:text-white
            shadow-md hover:shadow-blue-900/50
          "
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;

