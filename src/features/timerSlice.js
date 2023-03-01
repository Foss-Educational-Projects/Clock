import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	min: "25",
	sec: "00",
	stop:false,
	resume:false
}

const timerSlice = createSlice({
	name: "timer",
	initialState,
	reducers: {
		countDown: (state, _) => {
			if(parseInt(state.min) === 0 && parseInt(state.sec) === 0) {
				state.stop = true
				state.min = "00";
				state.sec = "00";
			}
			if (parseInt(state.sec) < 1 && !state.stop) {
				state.min = `${parseInt(state.min) - 1}`
				state.sec = `60`;
			}
			if(!state.stop) state.sec = `${parseInt(state.sec) - 1}`;
		},
		setCountDown: (state, action) => {
			state.min = action.payload;
		},
		resumeTimer: (state) => {
			state.resume = !state.resume;
		}
	}
})
export const { countDown, setCountDown, resumeTimer } = timerSlice.actions;
export default timerSlice.reducer;