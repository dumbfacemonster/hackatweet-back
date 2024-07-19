import styles from '../styles/Home.module.css';
import Tweet from './Tweet';
import LastTweets from './LastTweets';
import { addHashtag } from '../reducers/hashtags';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../reducers/user';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


function Home() {
//récupère les infos du user connecté
const user = useSelector((state) => state.user.value)

//récupère hashtags pour trends
const hashtags = useSelector((state) => state.hashtags.value);

const dispatch = useDispatch();
const router = useRouter();

const logout = () => {
  dispatch(removeUser());
  router.push('/login');
}

const trends = hashtags.map((data, i) => {
  const subject = data.hashtag;
  const repeats = data.count;
  return (
    <div className={styles.trend}>
      <h3>{subject}</h3>
      <p>{repeats}</p>
    </div>
  )
})

  return (
    <div className={styles.home}>
        <div className={styles.homeLeft}>
          <Link href='/'><img src='logo.svg' alt='Logo' className={styles.logo} /></Link>
            <div className={styles.bottomLeftHome}>
              <div className={styles.userInfos} >
                  <img className={styles.profilePic} src="profile-pic.png" alt='Profile picture' />
                  <div className={styles.userNames}>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                  </div>
              </div>
              <button className={styles.logoutBtn} onClick={() => logout()}>Logout</button>
            </div>
        </div>
        <div className={styles.tweets}>
          <h4>Home</h4>
        <LastTweets />
        </div>
        <div className={styles.trends}>
          <h4>Trends</h4>
          {trends}
        </div>
    </div>
  );
}

export default Home;
