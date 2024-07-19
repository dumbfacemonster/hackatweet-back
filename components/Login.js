import styles from '../styles/Login.module.css';
import { useState } from 'react';
import Signup from './Signup';
import Signin from './Signin';


function Login() {


    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isSigninOpen, setIsSigninOpen] = useState(false);
    console.log(`signin ${isSigninOpen}`)
    console.log(`signup ${isSignupOpen}`)


    return (
        <div className={styles.login}>
            <img src="/image_twitter.png" alt="twitter" className={styles.background} />
            <div className={styles.container}>
                <img src="logo.svg" alt="logo" className={styles.logo} />
                <h1 className={styles.title}>See what's happening</h1>
                <h3 className={styles.join}>Join Hackatweet today</h3>
                <button className={styles.signup} id="Signup" onClick={() => setIsSignupOpen(!isSignupOpen)}>Sign up</button>
                <h4>already have an account?</h4>
                <button className={styles.signin} id="Signin" onClick={() => setIsSigninOpen(!isSigninOpen)}>Sign in</button>
            </div>
            <Signup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(!isSignupOpen)} />
            <Signin isOpen={isSigninOpen} onClose={() => setIsSigninOpen(!isSigninOpen)} />
        </div>
    );
}

export default Login;

