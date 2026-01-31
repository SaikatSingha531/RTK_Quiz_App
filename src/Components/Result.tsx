// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../Hooks/Redux_Toolkit/Slice/Quiz.slice";
import { useAppdispatch, useAppseletor } from "../Hooks/Utils/Redux";

const Result = () => {

  const dispatch = useAppdispatch();
  const { score, questions } = useAppseletor((state) => state.quiz);

  return (
    <div>
      <h2>Quiz Finished 🎉</h2>
      <p>
        Score: {score} / {questions.length}
      </p>
      <button onClick={() => dispatch(resetQuiz())}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
