// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../Hooks/Redux_Toolkit/Slice/Quiz.slice";
import { useAppdispatch, useAppseletor } from "../Hooks/Utils/Redux";

const Result = () => {
  const dispatch = useAppdispatch();
  const { score, questions } = useAppseletor((state) => state.quiz);

  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold text-blue-300">
        Quiz Finished 🎉
      </h2>

      <p className="text-lg text-slate-300">
        Score:{" "}
        <span className="text-blue-400 font-semibold">
          {score}
        </span>{" "}
        / {questions.length}
      </p>

      <button
        onClick={() => dispatch(resetQuiz())}
        className="
          px-6 py-3 rounded-lg font-medium
          bg-blue-700 hover:bg-blue-600
          transition-colors duration-200
          shadow-lg hover:shadow-blue-700/50
        "
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;

