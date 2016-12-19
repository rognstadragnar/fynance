import React from 'react';
import LoginForm from './LoginForm.jsx';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addFlashmessage } from '../../actions/flashMessagesActions';
import logo from '../../_static/img/logo.svg'
import ReactCSSTransitionReplace from 'react-css-transition-replace';

class LoginPage extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <ReactCSSTransitionReplace
              component="div"
              className='login-page-container'
              transitionName="cross-fade"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
              >

                <div className='login-page-content'>
                    <div className='login-page-header'><img src={logo}></img></div>
                    <h1>Log in page</h1>
                    <LoginForm />
                    <span className='go-to-span'><Link to='signup'>Er du ikke medlem? <span>Bli medlem</span>.</Link></span>
                </div>

            </ReactCSSTransitionReplace>

        )
    }
}


export default LoginPage;
