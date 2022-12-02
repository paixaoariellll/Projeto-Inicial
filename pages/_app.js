import Layout from '../components/Layout';
import { AuthProvider } from '../Auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, database } from '../firebase';
import '../styles/globals.css'
import Login from './login';
import Loading from 'react-loading';
import { useEffect } from 'react';
import firebase from 'firebase/app';


function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      console.log(user);
      database.collection('users').doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimetamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />
  if (!user) return <Login />
  return (
    <AuthProvider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
