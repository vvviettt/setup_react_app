import { createSlice } from '@reduxjs/toolkit';
export const exampleSlice = createSlice({
    name: 'example',
    initialState: {
        counter: 1,
    },
    reducers: {
        example: (state, action) => {
            //update state
            state.counter = action.payload;
        }, //=> reduce(type: 'example/example')
    },
});

export const { example } = exampleSlice.actions;
export default exampleSlice.reducer;

//dispatch : dispatch(example())
