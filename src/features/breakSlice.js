import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 5
}

const breakSlice = createSlice({
	name: "break",
	initialState,
	reducers: {
		increaseBreak:(state, action) => {
			state.value++;
		},
		decreaseBreak:(state, action) => {
			state.value--;
		}
	}
})

export const { increaseBreak, decreaseBreak} = breakSlice.actions;
export default breakSlice.reducer;