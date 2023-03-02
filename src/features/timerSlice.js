import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	min: "10",
	sec: "00",
	stop: false,
	resume: false,
	timerType: "Session"
}

const timerSlice = createSlice({
	name: "timer",
	initialState,
	reducers: {
		countDown: (state, _) => {
			if (parseInt(state.min) === 0 && parseInt(state.sec) === 0) {
				state.stop = true
				state.min = "00";
				state.sec = "00";
			}
			if (parseInt(state.sec) < 1 && !state.stop) {
				parseInt(state.min) < 11 ? state.min = `0${parseInt(state.min) - 1}` : state.min = `${parseInt(state.min) - 1}`
				state.sec = `60`;
			}
			if (!state.stop) {
				if (parseInt(state.sec) < 11) {
					state.sec = `0${parseInt(state.sec) - 1}`
				}
				else {
					state.sec = `${parseInt(state.sec) - 1}`
				}
			};
		},
		setCountDown: (state, action) => {
			state.min = action.payload;
		},
		setTimerType: (state, action) => {
			state.timerType = action.payload;
		},
		resumeTimer: (state, action) => {
			state.resume = action.payload;
		},
		resetTimer: (state) => {
			state.min = "25";
			state.sec = "00";
		}
	}
})
export const { countDown, setCountDown, setTimerType, resumeTimer, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;