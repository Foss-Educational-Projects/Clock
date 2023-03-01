import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 25
}

const sessionSlice = createSlice({
	name:'session',
	initialState,
	reducers: {
		setSession: (state, action) => {
			state.value = action.payload;
		},
		increaseSession: (state, _) => {
			if(state.value === 60) {
				console.log("Session Upper Limit Reached")
			}
			else {
				state.value++;
			}
		},
		decreaseSession: (state, _) => {
			if(state.value === 1) {
				console.log("Session Lower Limit Reached")
			}
			else {
				state.value--;
			}
		}
	}
}) 

export const { setSession, increaseSession, decreaseSession } = sessionSlice.actions;
export default sessionSlice.reducer;