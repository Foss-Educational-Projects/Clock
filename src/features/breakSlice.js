import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 5
}

const breakSlice = createSlice({
	name:'break',
	initialState,
	reducers: {
		setBreak: (state, action) => {
			state.value = action.payload;
		},
		increaseBreak: (state, _) => {
			if(state.value === 60) {
				console.log("Break Upper Limit Reached")
			}
			else {
				state.value++;
			}
		},
		decreaseBreak: (state, _) => {
			if(state.value === 1) {
				console.log("Break Lower Limit Reached")
			}
			else {
				state.value--;
			}
		}
	}
}) 

export const { setBreak, increaseBreak, decreaseBreak } = breakSlice.actions;
export default breakSlice.reducer;