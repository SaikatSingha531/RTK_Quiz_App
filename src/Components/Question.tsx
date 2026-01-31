// import { useAppSelector } from "../";
import { useAppseletor } from "../Hooks/Utils/Redux";
import Options from "./Options";
// import ProgressBar from "./ProgressBar";

const Question = () => {
  const { questions, currentQuestionIndex } = useAppseletor(
    (state) => state.quiz
  );



const question = questions[currentQuestionIndex];

if (!question) return null; 

return (
  <div>

    <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
    <Options options={question.options} />
  </div>
);
};

export default Question;
