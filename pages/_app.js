import '../styles/globals.css';
import Head from 'next/head';
import hashtags from '../reducers/hashtags';
import user from '../reducers/user';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { hashtags, user },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Hackatweet</title>
      </Head>
     
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
