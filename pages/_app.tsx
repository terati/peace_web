import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { Mdx_components } from './mdx_components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={Mdx_components}>
      <Component {...pageProps} />
    </MDXProvider> 
  )
}

export default MyApp
