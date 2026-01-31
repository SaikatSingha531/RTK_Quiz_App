// import { useAppSelector } from "../app/hooks";

import { useAppseletor } from "../Hooks/Utils/Redux";

const ProgressBar = () => {
  const { currentQuestionIndex, questions } = useAppseletor(
    (state) => state.quiz
  );

  const progress =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  return <progress value={progress} max={100} />;
};

export default ProgressBar;
