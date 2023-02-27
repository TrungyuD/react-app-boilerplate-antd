import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
  data?: any;
}

const initialState: ExampleState = {
  data: {},
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setExample: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setExample: setExampleAction } = exampleSlice.actions;

const { reducer: exampleReducer } = exampleSlice;

export default exampleReducer;
