import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { addHashtag } from '../reducers/hashtags';
import { addUser } from '../reducers/user'
import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useState} from 'react';
import { removeUser } from '../reducers/user';
import Link from 'next/link';
import moment from 'moment';


function Tweet(props) {
	//console.log(props)

//gestion props isLiked
const [isLiked, setIsLiked] = useState(false);

// modification format date de création tweets
    const timestamp = moment(props.date).fromNow();

// style des icônes
let heartIconStyle = {'color' : 'white'};



	return (
		<div className={styles.tweet}>
			<div className={styles.tweetUser}>
                <img className={styles.profilePic} src="profile-pic.png" alt='Profile picture' />
                <h3 className={styles.name}>{props.name}</h3>
                <span className={styles.username}>@{props.username} • </span ><span className={styles.username}>{props.creationDate}</span>
            </div>
            <div className={styles.tweetContent}>
                {props.content}
            </div>
            <div className={styles.icons} >
            <FontAwesomeIcon style={heartIconStyle} type='button' icon={faHeart} />
            <FontAwesomeIcon style={trashIconStyle} type='button' icon={faTrashCan} />
            </div>
		</div>
	);
}

export default Tweet;
