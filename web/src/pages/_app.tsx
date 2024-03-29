import GlobalStyles from '../styles/GlobalStyles';
import { AnimatePresence } from 'framer-motion';
import AppProvider from '../../src/hooks';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <AppProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </AppProvider>
    </AnimatePresence>
  )
}

export default MyApp
