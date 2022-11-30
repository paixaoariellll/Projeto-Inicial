import Layout from '../components/Layout';
import { AuthProvider } from '../Auth';
import '../styles/globals.css'
/* import Loading from '../components/Loading'; */

function MyApp({ Component, pageProps }) {
  /*   return (<Loading type="bars" color="#03fbff" />) */
  return (
    <AuthProvider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
