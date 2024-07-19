import styles from '../styles/Signin.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../reducers/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

function Signin({ isOpen, onClose }) {

    const dispatch = useDispatch();
    const router = useRouter();

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');


    const handleConnect = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(addUser({ username: signInUsername, token: data.token }));
                    setSignInUsername('');
                    setSignInPassword('');
                    // Fait une transition-utilisateur rapide vers la page Home.js
                    router.push('/home');
                }
            });
    };

    return (
        <>
            {isOpen ? (
                <div className={styles.modal}>
                    <div className={styles.registerSection}>
                        <div className={styles.header}>
                            <FontAwesomeIcon className={styles.head} type='button' onClick={onClose} icon={faXmark} />
                        </div>
                        <img src="/logo.svg" alt="logo" className={styles.logo} />
                        <p className={styles.create}>Create your Hackatweet account</p>
                        <input className={styles.name} type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                        <input className={styles.name} type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                        <button className={styles.sign} id="connect" onClick={() => handleConnect()}>Sign in</button>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Signin;