import { produce } from 'immer'
import { Reducer } from 'redux'
import { INITIAL_STATE } from '~/next/store/Auth/state'
import TYPES from '~/next/store/Auth/types'
import State from '~/next/types/store/Auth/state'

const reducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_IS_LOGGED:
      return produce(state, (draft: State) => {
        draft.isLogged = action.payload.isLogged
      })

    default:
      return state
  }
}

export default reducer
