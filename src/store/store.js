import { configureStore} from '@reduxjs/toolkit'
import sessionSlice from '../features/sessionSlice'
import breakSlice from '../features/breakSlice'
import timerSlice from '../features/timerSlice'

export const store = configureStore({
	reducer: {
		break:breakSlice,
		session: sessionSlice,
		timer: timerSlice
	}
}) 