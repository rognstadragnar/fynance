import React from 'react';
import SignupForm from './SignupForm';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { userSignupRequest, doesUserExist } from '../../actions/signupActions';
import { addFlashmessage } from '../../actions/flashMessagesActions.js';
import logo from '../../_static/img/logo.svg';

class SignupPage extends React.Component {

    render(){
        const { userSignupRequest, addFlashmessage, doesUserExist } = this.props;
        return (
            <div className='signup-page-container'>
                <div className='signup-page-content'>
                    <div className='signup-page-aside'><img src={logo}></img></div>
                    <div className='signup-page-main'>
                        <h1>Signup page </h1>
                        <SignupForm
                            userSignupRequest={userSignupRequest}
                            addFlashmessage={addFlashmessage}
                            doesUserExist={doesUserExist}
                        />

                    <span className='go-to-span'><Link to='login'>Har du allerede konto? <span>Gå til innlogging.</span></Link></span>
                    </div>

                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashmessage: React.PropTypes.func.isRequired,
    doesUserExist: React.PropTypes.func.isRequired
}



export default connect((state) => {return {}}, { userSignupRequest, addFlashmessage, doesUserExist })(SignupPage);
