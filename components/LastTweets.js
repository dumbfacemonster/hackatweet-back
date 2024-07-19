import styles from '../styles/LastTweets.module.css';
import Tweet from './Tweet';
import { addHashtag } from '../reducers/hashtags';
import { addUser } from '../reducers/user'
import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useState} from 'react';
import { removeUser } from '../reducers/user';
import { useState } from 'react';
import Link from 'next/link';

function LastTweets() {
// récupère les infos du user
const user = useSelector((state) => state.user.value);

// enregistre champ nouveau tweet
const [newTweet, setNewTweet] = useState('');


// fetch tous les tweets en BDD à l'initialisation de la page
useEffect(() => {
    fetch('http://localhost:3000/tweets')
    .then(resp => resp.json())
    .then(data => {
        const allTweets = data.tweets;
        console.log(allTweets)
    })
}, [])

// poste le nouveau tweet en BDD
const handleTweetClick = () => {
    const sentTweet = {
        name: user.name,
        username: user.username,
        content:
    }
    fetch('http://localhost:3000/tweets', {
        method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
    }
}

const tweets = allTweets.map((data, i) => {
    return (
        <Tweet key={i} name={data.name} username={data.username} content={data.content} hashtag={data.hashtag} date={data.creationDate} />
    )
})

    return (
        <div className={styles.container}>
            <h4>Home</h4>
            <div className={styles.writeTweet}>
            <input type="text" placeholder="What's up ?" onChange={(e) => setNewTweet(e.target.value)} value={newTweet} />
            <div className={styles.underTweet}>
                <span>{newTweet.length}/280</span>
                <button id="sendTweet" onClick={() => handleConnection()}>Tweet</button>
            </div>
            </div>
        {tweets}
        </div>
    )
}