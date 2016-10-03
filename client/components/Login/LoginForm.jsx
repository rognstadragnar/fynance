import React from 'react';
import TextfieldGroup from '../_common/TextfieldGroup';

import validateInput from '../../../server/shared/validations/login'
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { addFlashmessage } from '../../actions/flashMessagesActions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errors: {},
            usernameFocus: '',
            passwordFocus: ''
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
        const name = [e.target.name] + 'Focus';
        if (e.target.value === '') {
            this.setState({ [name]: ''})
        } else {
            this.setState({ [name]: 'focus'})
        }
    }
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value})
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
        const { errors, username, password, usernameFocus, passwordFocus } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <TextfieldGroup
                    labelName='Username'
                    labelClass={usernameFocus ? usernameFocus : ''}
                    field='text'
                    name='username'
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    value={username}
                    errors={errors.username}
                />
                <TextfieldGroup
                    labelName='Password'
                    labelClass={passwordFocus ? passwordFocus : ''}
                    field='password'
                    name='password'
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    value={password}
                    errors={errors.password}
                />
                {this.state.errors.form && <span>{this.state.errors.form}</span>}
                <div className='form-group'>
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
