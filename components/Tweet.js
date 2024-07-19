import styles from '../styles/Tweet.module.css';
import { addHashtag } from '../reducers/hashtags';
import { addUser } from '../reducers/user'
import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useState} from 'react';
import { removeUser } from '../reducers/user';
import Link from 'next/link';

function Tweet(props) {
	console.log(props)

	return (
		<div className={styles.tweet}>
			<div className={styles.tweetUser}>
                <img className={styles.profilePic} src="profile-pic.png" alt='Profile picture' />
                <h3 className={styles.name}>{props.name}</h3>
                <span className={styles.username}>{props.username}</span> • <span className={styles.date}>{props.creationDate}</span>
            </div>
            <div className={styles.tweetContent}>
                {props.content}
            </div>
            
		</div>
	);
}

export default Tweet;
