import React from 'react';
import FlashMessagesList from './flash/FlashMessageList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import LoginPage from './Login/LoginPage';
import LoginSignUpFooter from './LoginSignUpFooter';

export default class LoginLayout extends React.Component {
    render(){
        return (
            <div className='login-signup-content'>
                <FlashMessagesList />
                <div className='transition-spacer'></div>
                <ReactCSSTransitionGroup
                  component="div"
                  className='login-signup-content-container'
                  transitionName="page"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                  >
                    {React.cloneElement(this.props.children, {key: location.pathname})}
                </ReactCSSTransitionGroup>
                <LoginSignUpFooter />
            </div>
        );
    }
};
