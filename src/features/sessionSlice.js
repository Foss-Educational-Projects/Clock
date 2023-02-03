import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 25
}

const sessionSlice = createSlice({
	name: "session",
	initialState,
	reducers: {
		increaseSession: (state, action) => {
			(state.value > 59) ? state.value = 60 : state.value++
			
		},
		decreaseSession: (state, action) => {
			(state.value < 2) ? state.value = 1 : state.value--
		},
		resetSession: (state) => {
			state.value = 25
		}
	}
})

export const { increaseSession, decreaseSession, resetSession } = sessionSlice.actions;
export default sessionSlice.reducer;