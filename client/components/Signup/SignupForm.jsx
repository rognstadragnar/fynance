import React from 'react';
import validateInput from '../../utils/validateSignup';
import TextfieldGroup from '../_common/TextfieldGroup';
import { browserHistory } from 'react-router';
import userIcon from '../../_static/img/user.svg';
import mailIcon from '../../_static/img/mail.svg';
import lockIcon from '../../_static/img/lock.svg';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {},
            alreadyExist: false,
            fullnameFocus: '',
            emailFocus: '',
            passwordFocus: '',
            confirmPasswordFocus: '',
            fullnameDirty: '',
            emailDirty: '',
            passwordDirty: '',
            confirmPasswordDirty: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkUserExists = this.checkUserExists.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    isValid(){
        const { errors, isValid} = validateInput(this.state, this.state.alreadyExist);
        if (!isValid) {
            this.setState({ errors })
        } else {
            return isValid;
        }
    }

    handleChange(e){
        const dirty = [e.target.name] + 'Dirty';
        let isDirty = '';
        e.target.value !== '' ? isDirty = 'dirty ' : isDirty = '';
        this.setState({ [e.target.name]: e.target.value, [dirty]: isDirty})
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.isValid()){
            this.props.userSignupRequest(this.state)
            .then(() => this.setState({
                fullname: '',
                email: '',
                password: '',
                confirmPassword: '',
                errors: {}}))
            .then(() => {
                this.props.addFlashmessage({type: 'success', text: 'You have signed up.'})
                this.context.router.push("/");
            })
            .catch((error) => this.setState({errors: error.response.data}))
        }
    }
    handleFocus(e){
        const name = [e.target.name] + 'Focus';
        this.setState({ [name]: 'focus '})
    }
    handleBlur(e){
        const name = [e.target.name] + 'Focus';
        const field = e.target.name;
        const val = e.target.value;
        this.setState({ [name]: ''})
        if (field === 'username'){
            this.checkUserExists(field, val)
        }

    }
    checkUserExists(field, val, e){
        if (val !== '') {
            let invalid;
            this.props.doesUserExist(val).then((res) => {
                res.data.errors && res.data.errors !== '' ? invalid = true : invalid = false;
                this.setState({alreadyExist: invalid})
            });
        }
    }
    render() {
        const {
            fullnameFocus,
            fullnameDirty,
            emailFocus,
            emailDirty,
            passwordFocus,
            passwordDirty,
            confirmPasswordFocus,
            confirmPasswordDirty
        } = this.state;
        return (
            <form className='signup-form' onSubmit={this.handleSubmit}>
                <TextfieldGroup
                    labelName='Full name'
                    labelClass={fullnameFocus + fullnameDirty + (this.state.errors.fullname ? 'error ' : '') + 'full-width'}
                    name='fullname'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={this.state.fullname}
                    errors={this.state.errors.fullname}
                    icon={userIcon}
                />
                <TextfieldGroup
                    labelName='E-mail'
                    labelClass={emailFocus + emailDirty +
                        (this.state.errors.email ? 'error ' : '')  + 'full-width'}
                    field='email'
                    name='email'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={this.state.email}
                    errors={this.state.errors.email}
                    icon={mailIcon}
                />

                <TextfieldGroup
                    labelName='Password'
                    labelClass={passwordFocus + passwordDirty + (this.state.errors.password ? 'error ' : '')  + 'half-width'}
                    field='password'
                    name='password'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={this.state.password}
                    errors={this.state.errors.password}
                    icon={lockIcon}
                />
                <TextfieldGroup
                    labelName='Confirm Password'
                    labelClass={confirmPasswordFocus + confirmPasswordDirty + (this.state.errors.confirmPassword ? 'error ' : '') + 'half-width'}
                    field='password'
                    name='confirmPassword'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={this.state.confirmPassword}
                    errors={this.state.errors.confirmPassword}
                    icon={lockIcon}

                />
            <div className='form-button-group'>
                    <button disabled={this.state.alreadyExist}>Signup</button>
                    {typeof this.state.errors === 'string' && <span>{this.state.errors}</span>}
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashmessage: React.PropTypes.func.isRequired,
    doesUserExist: React.PropTypes.func.isRequired
}
SignupForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default SignupForm;
