import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const PostApiUrl = '/api.json';

const PostRequestMethod = '/get/posts';

const initialState = [];

export const PostThunk = createAsyncThunk(PostRequestMethod, async () => {
  const PostData = await (await (fetch(PostApiUrl))).json();
  return PostData;
});

const PostSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    appenddata: (state, action) => [
        ...state,
        action.payload
      ],
    filterdata: (state, action) => state.filter((item) => item.type !== action.payload),

  },
  extraReducers: (builder) => {
    builder.addCase(PostThunk.fulfilled, (state, action) => {
      const { payload } = action;
      return [
        ...payload,
      ];
    });
  },
});

export const { appenddata, filterdata } = PostSlice.actions;

export default PostSlice.reducer;
