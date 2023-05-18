import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GroupApiUrl = '/group.json';

const GroupRequestMethod = '/get/groups';

const initialState = [];

export const GroupThunk = createAsyncThunk(GroupRequestMethod, async () => {
  const GroupData = await (await (fetch(GroupApiUrl))).json();
  return GroupData;
});

const GroupSlice = createSlice({
  name: 'Group',
  initialState,
  reducers: {
    appenddata: (state, action) => [
      ...state,
      action.payload,
    ],
    filterdata: (state, action) => state.filter((item) => item.type !== action.payload),

  },
  extraReducers: (builder) => {
    builder.addCase(GroupThunk.fulfilled, (state, action) => {
      const { payload } = action;
      return [
        ...payload,
      ];
    });
  },
});

export const { appenddata, filterdata } = GroupSlice.actions;

export default GroupSlice.reducer;
