import React from 'react';
import SignupForm from './SignupForm';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { userSignupRequest, doesUserExist } from '../../actions/signupActions';
import { addFlashmessage } from '../../actions/flashMessagesActions.js';

class SignupPage extends React.Component {

    render(){
        const { userSignupRequest, addFlashmessage, doesUserExist } = this.props;
        return (
            <div className='signup-page-container'>
                <div className='signup-page-content'>
                    <h1>Signup page </h1>
                    <SignupForm
                        userSignupRequest={userSignupRequest}
                        addFlashmessage={addFlashmessage}
                        doesUserExist={doesUserExist}
                    />
                    <span className='go-to-span'><Link to='login'>Go to login</Link></span>


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
