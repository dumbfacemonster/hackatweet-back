import styles from '../styles/Login.module.css';
import { useState } from 'react';
import Signup from './Signup';
import Signin from './Signin';


function Login() {
   
    // const signup = <></>

    // const handleSignup = () => {
    //     signup =  <Signup />
    // }
    

    return (
        <div className={styles.login}>
           <img src="/image_twitter.png" alt="twitter" className={styles.background}/>
           <div className={styles.container}>
           <img src="logo.svg" alt="logo" className={styles.logo} />
           <h1 className={styles.title}>See what's happening</h1>
           <h3 className={styles.join}>Join Hackatweet today</h3>
           <button className={styles.signup} id="Signup" onClick={() => handleSignup()}>Sign up</button>
           <h4>already have an account?</h4>
           <button className={styles.signin} id="signin" onClick={() => handleSignin()}>Sign in</button>
           </div>
           <Signup/>
        </div>
    );
}

export default Login;


 {/*const [isOverlayOpen, setIsOverlayOpen] = useState(false); 
    <button onClick={() => setIsOverlayOpen(!isOverlayOpen)}>Open Overlay</button>
            <Login isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)} />
            <h1> hello from overlay</h1> */}
            