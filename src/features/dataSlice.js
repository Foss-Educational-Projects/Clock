import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: false
}

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		timerStatus: (state, action) => {
			if(state.value){
				state.value ? state.value = false : state.value = true;
			}

		}
	}
})

export const { timerStatus } = dataSlice.actions;
export default dataSlice.reducer;