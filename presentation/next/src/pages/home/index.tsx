import { useSelector } from 'react-redux'
import { NextPage } from 'next'
import Link from 'next/link'
import { END } from 'redux-saga'
import Layout from '~/next/components/Layout'
import wrapperStore from '~/next/store'
import * as RepoActions from '~/next/store/Repo/actions'
import { Home } from '~/next/styles/pages/home'
import { Repo } from '~/next/types/store/Repo/state'
import States from '~/next/types/store/rootStates'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'

const Component: NextPage = () => {
  const repos = useSelector<States, Repo[]>((state) => state.Repo.repos)

  return (
    <Layout>
      <Home className="main">
        <header className="main-header">
          <Logo data-testid="logo" />
        </header>
        <main>
          <p>
            <Link href="/">
              <a>Go to /</a>
            </Link>
          </p>
          <ul>
            {repos.map(({ id, fullName }) => (
              <li key={id} data-testid="li">
                {fullName}
              </li>
            ))}
          </ul>
        </main>
      </Home>
    </Layout>
  )
}

export const getServerSideProps = wrapperStore.getServerSideProps<Promise<void>>(async ({ store }) => {
  store.dispatch(RepoActions.reposRequest('jefferson-william'))

  store.dispatch(END)

  await (store as any).sagaTask.toPromise()
})

export default Component
