import styles from '../styles/Login.module.css';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../reducers/user';


function Signup({isOpen, onClose, children}) {

    const dispatch = useDispatch();
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
				}
			});
	};

  return (
    <>
    <div className='Signin'>
    <div className={styles.registerSection}>
                    <img src="/logo-twitter-blanc.webp" alt="logo" />
					<p>Create your Hackatweet account</p>
                    <input type="text" placeholder="Name" id="signUpName" onChange={(e) => setSignUpName(e.target.value)} value={signUpName} />
					<input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
					<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
					<button id="register" onClick={() => handleRegister()}>Sign-up</button>
				</div>
    </div>
     
     </>   
  );
}

export default Signup;

 {/* {
        isOpen ? (
      <div className='overlay'>
        <div className='overlay_background' onClick={onClose}>
            <div className='overlay_container'>
                <div className='overlay_control'>
                    <button className='overlay_close' type='button' onClick={onClose}>x</button>
                {children}
                </div>
            </div>
        </div>
      </div>
      ) : null } */}