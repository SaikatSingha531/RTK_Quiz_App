import { useAppseletor } from "../Hooks/Utils/Redux";
import Options from "./Options";

const Question = () => {
  const { questions, currentQuestionIndex } = useAppseletor(
    (state) => state.quiz
  );

  const question = questions[currentQuestionIndex];
  if (!question) return null;

  return (
    <div className="space-y-6">
      <h2
        className="text-xl md:text-2xl font-semibold text-blue-200 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />
      <Options options={question.options} />
    </div>
  );
};

export default Question;

