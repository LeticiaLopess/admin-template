import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppContext, { AppProvider } from '../data/context/AppContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}


// o AppProvider nesse caso está provendo pra todos os componentes da aplicação o objeto nome com seu valor
