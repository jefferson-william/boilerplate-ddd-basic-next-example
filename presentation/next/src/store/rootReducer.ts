import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'
import Auth from '~/next/store/Auth/reducer'
import Repo from '~/next/store/Repo/reducer'
import Action from '~/next/types/lib/typesafe-actions'
import States from '~/next/types/store/rootStates'

export const combinedReducer = combineReducers({
  Auth,
  Repo,
})

const rootReducer = (state: States | undefined, action: Action<any>) => {
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
