import { configureStore } from "@reduxjs/toolkit";
import  topicsSliceReducer  from '../features/topics/TopicsSlice';


export default configureStore({
  reducer: {
    topics: topicsSliceReducer
  },
});
