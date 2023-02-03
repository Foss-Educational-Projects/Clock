import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 5
}

const breakSlice = createSlice({
	name: "break",
	initialState,
	reducers: {
		increaseBreak: (state, action) => {
			(state.value > 59) ? state.value = 60 : state.value++
			
		},
		decreaseBreak: (state, action) => {
			(state.value < 2) ? state.value = 1 : state.value--
		},
		resetBreak: (state) => {
			state.value = 5
		}
	}
})

export const { increaseBreak, decreaseBreak, resetBreak } = breakSlice.actions;
export default breakSlice.reducer;