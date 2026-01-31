import { useEffect } from "react";
import Question from "../Pages/Question";
import Result from "../Pages/Result";
import { useAppdispatch, useAppseletor } from "../Hooks/Utils/Redux";
import { fetchQuizData } from "../Hooks/Redux_Toolkit/Slice/Quiz.slice";

const QuizContainer = () => {
  const dispatch = useAppdispatch();
  const { isFinished, isLoading, error, questions } = useAppseletor(
    (state) => state.quiz
  );

  useEffect(() => {
    if (questions.length === 0) {
      dispatch(fetchQuizData());
    }
  }, [dispatch, questions.length]);

  if (isLoading)
    return (
      <div className="bg-slate-900/80 p-10 rounded-xl shadow-2xl">
        <p className="text-blue-300 animate-pulse">Loading quiz...</p>
      </div>
    );

  if (error)
    return (
      <div className="bg-red-950 p-10 rounded-xl shadow-2xl text-red-300">
        {error}
      </div>
    );

  return (
    <div className="w-full max-w-xl bg-slate-900/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-blue-900">
      {isFinished ? <Result /> : <Question />}
    </div>
  );
};

export default QuizContainer;

