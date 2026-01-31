import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import API from "../../../Lib/axiosInstace";
import type { QuizState, QuizQuestion } from "../../../Typescript/Interface/Interface";
import { toast } from "sonner";

/* ================= API RESPONSE TYPE ================= */

interface ApiQuizResult {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  category: string;
  difficulty: string;
  type: "boolean" | "multiple";
}

/* ================= TRANSFORM FUNCTION ================= */

const transformQuizData = (results: ApiQuizResult[]): QuizQuestion[] => {
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

/* ================= ASYNC THUNK ================= */

export const fetchQuizData = createAsyncThunk<
  QuizQuestion[],
  void,
  { rejectValue: string }
>(
  "quiz/fetchQuizData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/api.php", {
        params: { amount: 5 },
      });

      return transformQuizData(response.data.results);
    } catch {
      return rejectWithValue("Failed to fetch quiz");
    }
  }
);

/* ================= INITIAL STATE ================= */

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  isFinished: false,
  isLoading: false,
  error: null,
};

/* ================= SLICE ================= */

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerAndNext(state, action: PayloadAction<string>) {
      const currentQuestion = state.questions[state.currentQuestionIndex];

      if (!currentQuestion) return;

      if (action.payload === currentQuestion.correctAnswer) {
        state.score += 1;
      }

      state.currentQuestionIndex += 1;
      toast.info("Answer Send")

      if (state.currentQuestionIndex >= state.questions.length) {
        state.isFinished = true;
      }
    },

    resetQuiz(state) {
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.isFinished = false;
      toast.success("Start Again")
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchQuizData.fulfilled,
        (state, action: PayloadAction<QuizQuestion[]>) => {
          state.isLoading = false;
          state.questions = action.payload;
        }
      )
      .addCase(fetchQuizData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Failed to load quiz";
      });
  },
});

export const { answerAndNext, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
