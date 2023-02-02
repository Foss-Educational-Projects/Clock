import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 1
}

const sessionSlice = createSlice({
	name: "session",
	initialState,
	reducers: {
		increaseSession:(state, action) => {
			state.value++;
		},
		decreaseSession:(state, action) => {
			state.value--;
		}
	}
})

export const { increaseSession, decreaseSession } = sessionSlice.actions;
export default sessionSlice.reducer;