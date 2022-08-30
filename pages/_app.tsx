import '../styles/globals.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/template-catalog.css'
import '../styles/style.css' 
import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from '../model'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
