import React from 'react';
import './Login.css';
import image from './images/study.jpg'
import { Link } from 'react-router-dom'

function Login() {
    return(
        <div className="App">
            <div className='container'>
                <div className='header'>
                    <div className='Faradis-quiz'>FaraQuiz</div>
                    <div><Link to='/home' className='have-acc'>Create an account</Link></div>
                </div>
                <div className='content'>
                    <div className='image'><img src={image} alt='study'></img></div>
                        <div className='utama'>
                            <div className='header-content'>
                                <h1>Welcome to FaraQuiz</h1>
                                <h4>Login & start playing</h4>
                            </div>
                            <form>
                                <label>Enter Name</label>
                                <input></input>
                
                                <label>Enter Password</label>
                                <input></input>
                                <div className='forgot-password'>Forgot password</div>
                
                                <button type='submit'>Login</button>
                            </form>
                        </div>
                </div>
            </div>
      </div>
    );
}

export default Login;