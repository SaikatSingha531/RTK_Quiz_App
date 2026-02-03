import { resetQuiz } from "../Hooks/Redux_Toolkit/Slice/Quiz.slice";
import { useAppdispatch, useAppseletor } from "../Hooks/Utils/Redux";

const Result = () => {
  const dispatch = useAppdispatch();
  const { score, questions } = useAppseletor((state) => state.quiz);

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-300">
        Quiz Finished 🎉
      </h2>

      <p className="text-center text-lg text-slate-300">
        Score:{" "}
        <span className="text-blue-400 font-semibold">
          {score}
        </span>{" "}
        / {questions.length}
      </p>

      
      <div className="space-y-6">
        {questions.map((q, index) => {
          const isCorrect = q.selectedAnswer === q.correctAnswer;

          return (
            <div
              key={q.id}
              className="p-5 rounded-lg border border-blue-800 bg-blue-950"
            >
              <h3
                className="text-blue-200 font-semibold mb-3"
                dangerouslySetInnerHTML={{
                  __html: `${index + 1}. ${q.question}`,
                }}
              />

              <p className="text-sm">
                 Your Answer:{" "}
                <span
                  className={
                    isCorrect ? "text-green-400" : "text-red-400"
                  }
                >
                  {q.selectedAnswer ?? "Not Answered"}
                </span>
              </p>

              {!isCorrect && (
                <p >
                   Correct Answer: <span className="text-sm text-green-400 mt-1"> {q.correctAnswer}</span>
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <button
          onClick={() => dispatch(resetQuiz())}
          className="px-6 py-3 rounded-lg font-medium
          bg-blue-700 hover:bg-blue-600 transition"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default Result;
