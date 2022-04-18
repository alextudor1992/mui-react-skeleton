import { Reducer } from '@reduxjs/toolkit'

type DefaultReducerState = {}

const initialState: DefaultReducerState = {}

export const defaultReducer: Reducer<DefaultReducerState> = (
  state: DefaultReducerState = initialState,
  action,
) => (action ? state : initialState)
