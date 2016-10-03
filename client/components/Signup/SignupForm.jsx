import React from 'react';
import validateInput from '../../../server/shared/validations/signup';
import TextfieldGroup from '../_common/TextfieldGroup';
import { browserHistory } from 'react-router';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            address: '',
            postnummer: '',
            username: '',
            password: '',
            confirmPassword: '',
            errors: {},
            alreadyExist: false,
            firstnameFocus: '',
            lastnameFocus: '',
            emailFocus: '',
            addressFocus: '',
            postnummerFocus: '',
            usernameFocus: '',
            passwordFocus: '',
            confirmPasswordFocus: ''
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
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.isValid()){
            this.props.userSignupRequest(this.state)
            .then(() => this.setState({username: '', password: '', errors: {}}))
            .then(() => {
                this.props.addFlashmessage({type: 'success', text: 'You have signed up.'})
                this.context.router.push("/");
            })
            .catch((error) => this.setState({errors: error.response.data}))
        }
    }
    handleFocus(e){
        const name = [e.target.name] + 'Focus';
        this.setState({ [name]: 'focus'})
    }
    handleBlur(e){
        const name = [e.target.name] + 'Focus';
        const field = e.target.name;
        const val = e.target.value;
        if (e.target.value === '') {
            this.setState({ [name]: ''})
        } else {
            this.setState({ [name]: 'focus'})
            if (field === 'username'){
                this.checkUserExists(field, val)
            }
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
        const { firstnameFocus,
            lastnameFocus,
            emailFocus,
            addressFocus,
            postnummerFocus,
            usernameFocus,
            passwordFocus,
            confirmPasswordFocus } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <TextfieldGroup
                    labelName='First name'
                    labelClass={firstnameFocus ? firstnameFocus : ''}
                    field='text'
                    name='firstname'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={this.state.firstname}
                    errors={this.state.errors.firsname}
                />
                <TextfieldGroup
                    labelName='Last name'
                    labelClass={lastnameFocus ? lastnameFocus : ''}
                    field='text'
                    name='lastname'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={this.state.lastname}
                    errors={this.state.errors.lastname}
                />
                <TextfieldGroup
                    labelName='E-mail'
                    labelClass={emailFocus ? emailFocus : ''}
                    field='email'
                    name='email'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={this.state.email}
                    errors={this.state.errors.email}
                />
                <TextfieldGroup
                    labelName='Address'
                    labelClass={addressFocus ? addressFocus : ''}
                    field='address'
                    name='address'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={this.state.address}
                    errors={this.state.errors.address}
                />
                <TextfieldGroup
                    labelName='Postnummer'
                    labelClass={postnummerFocus ? postnummerFocus : ''}
                    field='postnummer'
                    name='postnummer'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={this.state.postnummer}
                    errors={this.state.errors.postnummer}
                />
                <TextfieldGroup
                    labelName='Username'
                    labelClass={usernameFocus ? usernameFocus : ''}
                    field='username'
                    name='username'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={this.state.username}
                    errors={this.state.errors.username}
                />
                <TextfieldGroup
                    labelName='Password'
                    labelClass={passwordFocus ? passwordFocus : ''}
                    field='password'
                    name='password'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={this.state.password}
                    errors={this.state.errors.password}
                />
                <TextfieldGroup
                    labelName='Confirm Password'
                    labelClass={confirmPasswordFocus ? confirmPasswordFocus : ''}
                    field='confirmPassword'
                    name='confirmPassword'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={this.state.confirmPassword}
                    errors={this.state.errors.confirmPassword}
                />
                <div className='form-group'>
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
