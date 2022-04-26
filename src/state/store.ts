import { configureStore } from '@reduxjs/toolkit'
import { defaultReducer } from './reducers/defaultReducer'

export type State = {
  currentUser: {}
}

export const store = configureStore({
  reducer: {
    defaultReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
