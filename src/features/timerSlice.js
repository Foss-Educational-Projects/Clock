import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: false
}

const timerSlice = createSlice({
	name: "timer",
	initialState,
	reducers: {
		resumeTimer: (state, action) => {
			state.value ? state.value = false : state.value = true
		}
	}
})

export const { resumeTimer } = timerSlice.actions;
export default timerSlice.reducer;