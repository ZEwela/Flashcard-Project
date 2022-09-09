import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/TopicsSlice";

export const thunkActionCreatorAddQuiz = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId(payload))
    }
}

const quizzesSlice = createSlice(
    {
        name: 'quizzes',
        initialState: {
            quizzes: {}
        },
        reducers: {
            addQuiz: (state, action) => {
                state.quizzes[action.payload.id] = action.payload
            }
        }
        // ,
        // extraReducers: (builder) => {
        //     builder
        //     .addCase()
        // }
    }
)

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;