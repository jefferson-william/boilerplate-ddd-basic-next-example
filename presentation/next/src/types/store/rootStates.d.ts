import AuthState from '~/next/types/store/Auth/state'
import RepoState from '~/next/types/store/Repo/state'

export default interface States {
  Auth: AuthState
  Repo: RepoState
}
