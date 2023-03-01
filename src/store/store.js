import { configureStore} from '@reduxjs/toolkit'
import timerSlice from '../features/timerSlice'
import sessionSlice  from '../features/sessionSlice'

export const store = configureStore({
	reducer: {
		time:timerSlice,
		session:sessionSlice
	}
}) 