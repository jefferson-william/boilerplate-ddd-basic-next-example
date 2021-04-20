import { all } from 'redux-saga/effects'
import Auth from '~/next/store/Auth/sagas'
import Repo from '~/next/store/Repo/sagas'

export default function* rootSaga() {
  return yield all([Auth, Repo])
}
