import { createSlice, createAsyncThunk,type PayloadAction } from "@reduxjs/toolkit";
import API from "../../../Lib/axiosInstace";
import type { QuizState, QuizQuestion } from "../../../Typescript/Interface/Interface";


const transformQuizData = (results: any[]): QuizQuestion[] => {
  return results.map((item, index) => ({
    id: index + 1,
    question: item.question,
    options:
      item.type === "boolean"
        ? ["True", "False"]
        : [...item.incorrect_answers, item.correct_answer].sort(
            () => Math.random() - 0.5
          ),
    correctAnswer: item.correct_answer,
    category: item.category,
    difficulty: item.difficulty,
  }));
};


export const fetchQuizData = createAsyncThunk(
  "quiz/fetchQuizData",
  async () => {
    const response = await API.get("/api.php", {
      params: { amount: 5 },
    });

    return transformQuizData(response.data.results);
  }
);


const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  isFinished: false,
  isLoading: false,
  error: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerAndNext(state, action: PayloadAction<string>) {
      const currentQuestion = state.questions[state.currentQuestionIndex];

      if (action.payload === currentQuestion.correctAnswer) {
        state.score += 1;
      }

      state.currentQuestionIndex += 1;

      if (state.currentQuestionIndex >= state.questions.length) {
        state.isFinished = true;
      }
    },

    resetQuiz(state) {
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.isFinished = false;
}

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchQuizData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuizData.rejected, (state) => {
        state.isLoading = false;
        state.error = "Failed to load quiz";
      });
  },
});

export const { answerAndNext, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
