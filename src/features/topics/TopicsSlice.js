import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice(
    {
        name: 'topics',
        initialState: {
            topics: {}
        },
        reducers: {
            addTopic: (state, action) => {
                // const {id, name, icon} = action.payload;
                // state.topics[id] = {
                //     id,
                //     name,
                //     icon,
                //     quizIds: []
                // } 


                state.topics[action.payload.id] = action.payload;

                state.topics[action.payload.id]['quizIds'] = []
            }
        }
    }
)

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer