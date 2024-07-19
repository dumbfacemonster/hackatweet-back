import styles from '../styles/Signup.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../reducers/user';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

function Signup({ isOpen, onClose }) {

    const dispatch = useDispatch();
    const router = useRouter();

    const [signUpName, setSignUpName] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');


    const handleRegister = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: signUpName, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(addUser({ username: signUpUsername, token: data.token }));
                    setSignUpName('');
                    setSignUpUsername('');
                    setSignUpPassword('');
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
                        <input className={styles.name} type="text" placeholder="Name" id="signUpName" onChange={(e) => setSignUpName(e.target.value)} value={signUpName} />
                        <input className={styles.name} type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                        <input className={styles.name} type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                       <button className={styles.sign} id="register" onClick={() => handleRegister()}>Sign up</button>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Signup;
