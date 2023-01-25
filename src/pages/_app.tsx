import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppContext, { AppProvider } from '../data/context/AppContext'
import { AuthProvider } from '../data/context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  )
}


// o AppProvider nesse caso está provendo pra todos os componentes da aplicação o objeto nome com seu valor
