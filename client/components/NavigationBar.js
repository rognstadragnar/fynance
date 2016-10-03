import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { addFlashmessage } from '../actions/flashmessagesActions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Nav extends React.Component{
    constructor(props){
        super(props);

        this.state = {active: this.props.location.pathname.split('/')[1]}
    }
    componentDidMount(){
        this.setState({ active: this.props.location.pathname.split('/')[1]})
    }
    logout(e) {
        e.preventDefault();
        this.props.logout();
        this.props.addFlashmessage({type: 'success', text: 'You have logged out.'})
        this.setState({ active: this.props.location.pathname.split('/')[1]})
        this.context.router.push('/login');
    }
    handleClick(a){
        this.setState({ active: this.props.location.pathname.split('/')[1]})
        console.log(this.state);
    }

    render() {
        console.log(this.props.location)
        const { isAuthenticated } = this.props.auth;
        const { username, _id } = this.props.auth.user;
        const userLinks = (
            <ul>
                <li onClick={() => this.handleClick.bind(this)('profile')}>
                    <Link
                    className={this.state.active === 'profile' ? 'active' : ''}
                    to='profile'>{username}</Link>
                </li>
                <li onClick={() => this.handleClick.bind(this)('about')}>
                    <Link
                    className={this.state.active === 'about' ? 'active' : ''}
                    to='about'>About</Link>
                </li>
                <li onClick={() => this.handleClick.bind(this)('work')}>
                    <Link
                    className={this.state.active === 'work' ? 'active' : ''}
                    to='work'>Work</Link>
                </li>
                <li onClick={() => this.handleClick.bind(this)('contact')}>
                    <Link
                    className={this.state.active === 'contact' ? 'active' : ''}
                    to='contact'>Contact</Link>
                </li>

                <li><Link onClick={this.logout.bind(this)} to='/'>Log out</Link></li>
            </ul>
        )
        const guestLinks = (
            <ul>
                <li onClick={() => this.handleClick.bind(this)('login')}>
                    <Link
                    className={this.state.active === 'login' ? 'active' : ''}
                    to='login'>Log in</Link>
                </li>
                <li onClick={() => this.handleClick.bind(this)('login')}>
                    <Link
                    className={this.state.active === 'signup' ? 'active' : ''}
                    to='signup'>Sign up</Link>
                </li>
            </ul>
        )
        return (
            <nav className='wrapper'>
                {isAuthenticated ? userLinks : guestLinks}
            </nav>
        );
    }
}
Nav.contextTypes = {
    router: React.PropTypes.object.isRequired
}

Nav.propTypes = {
    auth: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer
    }
}


export default connect(mapStateToProps, { logout, addFlashmessage })(Nav);
