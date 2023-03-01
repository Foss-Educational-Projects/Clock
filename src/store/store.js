import { configureStore} from '@reduxjs/toolkit'
import timerSlice from '../features/timerSlice'
import sessionSlice  from '../features/sessionSlice'
import breakSlice from '../features/breakSlice'

export const store = configureStore({
	reducer: {
		time: timerSlice,
		session: sessionSlice,
		break: breakSlice
	}
})