import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	min:"25",
	sec: "00"
}

const timerSlice = createSlice({
	name: "timer",
	initialState,
	reducers: {
		decrease:(state, action) => {
			if(parseInt(state.sec) < 0){
				min = `${parseInt(min) - 1}`
				sec = `60`;
			}
			sec--;
		}
	}
})
export const { decrease } = timerSlice.actions;
export default timerSlice.reducer;