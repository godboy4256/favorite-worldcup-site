import type { AppProps } from 'next/app'
import Layout from './layout'
import { Global } from '@emotion/react'
import { globalStyles } from "../src/common/styles/global_styles"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
