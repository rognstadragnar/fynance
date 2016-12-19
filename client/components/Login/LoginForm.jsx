import React from 'react';
import TextfieldGroup from '../_common/TextfieldGroup';

import validateInput from '../../utils/validateLogin';

import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { addFlashmessage } from '../../actions/flashMessagesActions';
import arrow from '../../_static/img/arrow.svg';
import userIcon from '../../_static/img/user.svg';
import lockIcon from '../../_static/img/lock.svg';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailFocus: '',
            emailDirty: '',
            password: '',
            passwordFocus: '',
            passwordDirty: '',
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleFocus(e){
        const name = [e.target.name] + 'Focus';
        this.setState({ [name]: 'focus'})
    }
    handleBlur(e){
        const focus = [e.target.name] + 'Focus';
        const dirty = [e.target.name] + 'Dirty';

        this.setState({ [focus]: ''})
    }
    handleChange(e){
        const dirty = [e.target.name] + 'Dirty';
        let isDirty = '';
        e.target.value !== '' ? isDirty = 'dirty' : isDirty = '';
        this.setState({ [e.target.name]: e.target.value, [dirty]: isDirty})
    }
    handleSubmit(e){
        e.preventDefault();
        if (this.isValid()) {
            this.setState({errors: {}});
            this.props.login(this.state)
                .then((res) => {
                    this.props.addFlashmessage({type: 'success', text: 'You have logged in.'})
                    //this.context.router.push('/');
                    this.context.router.replace('/');
                })
                .catch((error) => {console.log(error); this.setState({errors: error.response.data.errors})})

        }
    }
    isValid(){
        const { errors, isValid } = validateInput(this.state);

        if(!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }
    render() {
        const { errors, email, emailFocus, emailDirty,
            password, passwordFocus, passwordDirty } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <TextfieldGroup
                    labelName='E-post'
                    labelClass={emailFocus + ' ' + emailDirty + ' ' + (this.state.errors.email ? 'error' : '')}
                    field='text'
                    name='email'
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    value={email}
                    errors={errors.email}
                    icon={userIcon}
                />
                <TextfieldGroup
                    labelName='Passord'
                    labelClass={passwordFocus + ' ' + passwordDirty + ' ' + (this.state.errors.password ? 'error' : '')}
                    field='password'
                    name='password'
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    value={password}
                    errors={errors.password}
                    icon={lockIcon}

                />
                {this.state.errors.form && <span>{this.state.errors.form}</span>}
                <div className='form-button-group'>
                    <button>Log in</button>
                </div>
            </form>
        )
    }
}
LoginForm.propTypes = {
    login: React.PropTypes.func.isRequired,
    addFlashmessage: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(null, { login, addFlashmessage })(LoginForm)
