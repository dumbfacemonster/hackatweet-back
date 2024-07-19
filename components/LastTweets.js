import styles from '../styles/LastTweets.module.css';
import Tweet from './Tweet';
import { addHashtag, deleteHashtag, incrementHashtag, decrementHashtag } from '../reducers/hashtags';
import { addUser } from '../reducers/user'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { removeUser } from '../reducers/user';
import Link from 'next/link';

function LastTweets() {

const dispatch = useDispatch();

// récupère les infos du user
const user = useSelector((state) => state.user.value);
//récupère les infos du reducer hashtag
const hashtags = useSelector((state) => state.hashtags.value);

    // enregistre champ nouveau tweet
    const [newTweet, setNewTweet] = useState('');
    // stocke tous les tweets de la BDD
    const [allTweets, setAllTweets] = useState([]);


    // fetch tous les tweets en BDD à l'initialisation de la page
    useEffect(() => {
        fetch('http://localhost:3000/tweets')
            .then(resp => resp.json())
            .then(data => {
                setAllTweets(data.tweets);
                console.log(allTweets)
            })
    }, [])

// poste le nouveau tweet en BDD + màj reducer hashtags
const handleTweetClick = () => {
    const sentTweet = {
        name: user.name,
        username: user.username,
        content: newTweet,
        creationDate: new Date(),
    }
    fetch('http://localhost:3000/tweets', {
        method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(sentTweet)
    })
    .then(resp => resp.json())
    .then((data) => {
        if (data.result) {
        console.log(data);
        setAllTweets([...allTweets, data.tweet]);
        setNewTweet('');
        const index = hashtags.findIndex(e => e.hashtag === data.hashtag);
        if (index >= 0) {
            dispatch(incrementHashtag(index));
        }
        else {
            dispatch(addHashtag(data.hashtag));
        };  
        }
})

}

console.log(allTweets)

const sortedTweets = allTweets.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
console.log(sortedTweets);

const tweets = sortedTweets.map((data, i) => {
    return (
        <Tweet key={i} name={data.name} username={data.username} content={data.content} hashtag={data.hashtag} date={data.creationDate} isLiked />
    )
})

    return (
        <div className={styles.container}>
            <div className={styles.separate}>
            <div className={styles.writeTweet}>
                <textarea  maxLength='280' className={styles.tweetInput} type="textarea" placeholder="What's up ?" onChange={(e) => setNewTweet(e.target.value)} value={newTweet} />
                <div className={styles.underTweet}>
                    <span className={styles.count} >{newTweet.length}/280</span>
                    <button className={styles.tweetBtn} id="sendTweet" onClick={() => handleTweetClick()}>Tweet</button>
                </div>
            </div>
            </div>
            <div className={styles.scrollbar}>
            {tweets}
            </div>
        </div>
    )
}

export default LastTweets;