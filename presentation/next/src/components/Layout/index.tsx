import React, { FC } from 'react'
import GlobalStyles from '~/next/styles/global'

const Layout: FC = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
)

export default Layout
