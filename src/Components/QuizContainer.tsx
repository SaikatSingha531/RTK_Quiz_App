import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import { fetchQuizData } from "../Hooks/Redux_Toolkit/Slice/Quiz.slice";
import Question from "./Question";
import Result from "./Result";
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


  if (isLoading) return <p>Loading quiz...</p>;
  if (error) return <p>{error}</p>;

  return isFinished ? <Result /> : <Question/>;
};

export default QuizContainer;
