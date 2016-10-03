import React from 'react';
import LoginForm from './LoginForm.jsx';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addFlashmessage } from '../../actions/flashMessagesActions';

class LoginPage extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div className='login-page-container'>
                <div className='login-page-content'>
                    <h1>Log in page</h1>
                    <LoginForm />
                    <span className='go-to-span'><Link to='signup'>Go to signup</Link></span>
                </div>

            </div>

        )
    }
}


export default LoginPage;
