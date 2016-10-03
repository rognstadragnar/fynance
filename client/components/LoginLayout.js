import React from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessageList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoginPage from './Login/LoginPage';
import LoginSignUpFooter from './LoginSignUpFooter';

export default class LoginLayout extends React.Component {
    render(){
        return (
            <div className='login-signup-content'>
                <FlashMessagesList />

                <ReactCSSTransitionGroup
                  component="div"
                  className='main-content-container'
                  transitionName="example"
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
