import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const CardApiUrl = '/api.json';

const CardRequestMethod = '/get/cards';

const initialState = [];

export const CardThunk = createAsyncThunk(CardRequestMethod, async () => {
  const cardData = await (await (fetch(CardApiUrl))).json();
  return cardData;
});

const CardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    appenddata: (state, action) => [
      ...state, action.payload,
    ],

    filterdata: (state, action) => state.filter((item) => item.id !== action.payload),

  },
  extraReducers: (builder) => {
    builder.addCase(CardThunk.fulfilled, (state, action) => {
      const { payload } = action;
      return [
        ...payload,
      ];
    });
  },
});

export const { appenddata, filterdata } = CardSlice.actions;

export default CardSlice.reducer;
