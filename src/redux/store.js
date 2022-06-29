import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '~/components/Example/exampleSlice';
const store = configureStore({
    reducer: {
        example: exampleReducer,
    },
});
export default store;
