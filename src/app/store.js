import { configureStore } from "@reduxjs/toolkit";
import  topicsSliceReducer  from '../features/topics/TopicsSlice';
import quizzesSliceReducer from "../features/quizzes/QuizzesSlice";
import cardsSliceReducer from '../features/cards/CardsSlice';


export default configureStore(
  {
    reducer: 
      {
        topics: topicsSliceReducer,
        quizzes: quizzesSliceReducer,
        cards: cardsSliceReducer
      }
  }
);