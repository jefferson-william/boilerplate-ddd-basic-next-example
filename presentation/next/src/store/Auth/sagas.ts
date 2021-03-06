import axios from 'axios'
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { setIsLogged } from '~/next/store/Auth/actions'
import INITIAL_STATE from '~/next/store/Auth/state'
import TYPES from '~/next/store/Auth/types'

export function* validateIsLoggedRequest() {
  try {
    yield put(setIsLogged(INITIAL_STATE.isLogged))

    yield call(axios.get, `https://auth.jefferson.com/validate`)

    yield put(setIsLogged(true))
  } catch (exception) {
    yield put(setIsLogged(INITIAL_STATE.isLogged))
  }
}

export default all([takeLatest(TYPES.VALIDATE_IS_LOGGED_REQUEST, validateIsLoggedRequest)])
