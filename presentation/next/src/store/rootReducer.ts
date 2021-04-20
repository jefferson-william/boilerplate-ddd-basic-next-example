import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers, Reducer } from 'redux'
import Auth from '~/next/store/Auth/reducer'
import Repo from '~/next/store/Repo/reducer'
import States from '~/next/types/store/rootStates'

export const combinedReducer = combineReducers({
  Auth,
  Repo,
})

const rootReducer: Reducer<States> = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }

  return combinedReducer(state, action)
}

export default rootReducer
