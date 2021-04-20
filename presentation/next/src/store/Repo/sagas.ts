import axios from 'axios'
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { setRepos } from '~/next/store/Repo/actions'
import INITIAL_STATE from '~/next/store/Repo/state'
import TYPES from '~/next/store/Repo/types'
import Action from '~/next/types/lib/typesafe-actions'

export function* reposRequest(data: Action<string>) {
  try {
    yield put(setRepos(INITIAL_STATE.repos))

    const response = yield call(axios.get, `https://api.github.com/users/${data.payload}/repos`)

    const repos = response.data?.map((repo: any) => ({ id: repo.id, fullName: repo.full_name }))

    yield put(setRepos(repos))
  } catch (exception) {
    yield put(setRepos(INITIAL_STATE.repos))
  }
}

export default all([takeLatest(TYPES.REPOS_REQUEST, reposRequest)])
