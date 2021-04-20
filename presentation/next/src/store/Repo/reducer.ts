import { produce } from 'immer'
import { Reducer } from 'redux'
import { INITIAL_STATE } from '~/next/store/Repo/state'
import TYPES from '~/next/store/Repo/types'
import State from '~/next/types/store/Repo/state'

const reducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_REPOS:
      return produce(state, (draft: State) => {
        draft.repos = action.payload.repos
      })

    default:
      return state
  }
}

export default reducer
