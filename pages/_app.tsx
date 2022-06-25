import type { AppProps } from 'next/app'
import { CounterProvider } from '../src/counter-context'

function MyApp({ Component, pageProps }: AppProps) {
  return <CounterProvider>
      <Component {...pageProps} />
    </CounterProvider>
}

export default MyApp
