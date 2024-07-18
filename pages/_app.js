import '../styles/globals.css';
import Head from 'next/head';
import { configureStore } from '@reduxjs/toolkit';
import hashtags from '../reducers/hashtags';
import user from '../reducers/user';

const store = configureStore({
  reducer: { hashtags, user },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Hackatweet</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
