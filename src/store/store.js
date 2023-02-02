import { configureStore} from '@reduxjs/toolkit'
import sessionSlice from '../features/sessionSlice'
import breakSlice from '../features/breakSlice'

export const store = configureStore({
	reducer: {
		break:breakSlice,
		session: sessionSlice
	}
}) 