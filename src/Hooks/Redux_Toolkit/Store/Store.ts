import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../Slice/Quiz.slice"
export const store  = configureStore({
    reducer:{
    quiz: quizReducer,
  },
})