import { act, waitFor } from '@testing-library/react'
import { getMoxios } from '~/next/__mocks__/lib/axios'
import { camelcase } from '~/next/__mocks__/store/Repo/sagas'
import { myRender } from '~/next/__stubs__/render'
import Home from '~/next/pages/home'
import '~/next/__mocks__/nextRouter'

describe('pages/home', () => {
  beforeEach(() => {
    const route = 'https://api.github.com/users/jefferson-william/repos'
    const moxios = getMoxios()

    moxios.onGet(route).reply(200, camelcase)
  })

  it('render', async () => {
    const { getByTestId, getAllByTestId } = myRender(<Home />)

    act(() => {
      expect(getByTestId('logo')).toBeInTheDocument()
    })

    waitFor(() => {
      expect(getAllByTestId('li')).toHaveLength(2)
    })
  })
})
