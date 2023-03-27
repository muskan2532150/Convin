import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const CardApiUrl = '/api.json';

const CardRequestMethod = '/get/cards';

const initialState = [];

export const CardThunk = createAsyncThunk(CardRequestMethod, async () => {
  const cardData = await (await (fetch(CardApiUrl))).json();
  return cardData;
});

const CardSlice = createSlice({
    name: 'Card',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(CardThunk.fulfilled, (state, action) => {
        const { payload } = action;
        return [
          ...payload,
        ];
      });
    },
  });
  export default CardSlice.reducer;