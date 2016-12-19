import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import { addFlashmessage } from '../../actions/flashmessagesActions';
import { toggleSidenavExpand } from '../../actions/navActions';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Logo from '../../_static/img/logo/newLogo.svg';
import user from '../../_static/img/userWhite.svg';
import settings from '../../_static/img/settingsWhite.svg';
import notification from '../../_static/img/notification.svg';
import mail from '../../_static/img/mailWhite.svg';
import more from '../../_static/img/icons/more.svg';
import profilePic from '../../_static/img/trump.jpg';
import Dropdown from '../_common/Dropdown';

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
    handleExpandedClick(){
        this.props.toggleSidenavExpand();
    }

    render() {
        const userData = {
            "name": "Lukas",
            "surname": "Claes",
            "gender": "male",
            "region": "Belgium"
        }
        console.log(this.props.location)
        const { isAuthenticated } = this.props.auth;
        const { username, _id } = this.props.auth.user;
        const notifications = [
            {'linkTo': '/', 'content': 'Min varsel'},
            {'linkTo': '/', 'content': 'Din varsel'}
        ]
        
        const isNoNotifications = <li>Du har ingen varsler.</li>;
        const isNotifications = notifications.map((n) => <li><Link to='/'>{n.content}</Link></li>);
        const showNotifications = notifications.length > 0 ? 
            notifications.map((n) => <li><Link to='/'>{n.content}</Link></li>): isNoNotifications;
        console.log(showNotifications, notifications)

        const messages = [];
        const userLinks = (
            <ul>
                <Dropdown img={notification} imgClass='topnav-img' counter={notifications.length}>
                    { showNotifications }
                </Dropdown>
                <Dropdown img={profilePic} imgClass='topnav-img' counter={messages.length}>
                    { showNotifications } 
                </Dropdown>
                <Dropdown img={more} imgClass='topnav-img'>
                    <li><Link to='asd'>Min profil</Link></li>
                    <li><Link onClick={this.logout.bind(this)} to='/'>Logg ut</Link></li>
                </Dropdown>
            </ul>
        )
        
        return (
            <header className={this.props.isExpandedClass}>
                <img className='header-logo' src={Logo} alt='logo'/>
                <button onClick={this.handleExpandedClick.bind(this)}>asd</button>
                <nav className='nav-content'>{isAuthenticated ? userLinks : null}</nav>

            </header>
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
        auth: state.authReducer,
        isExpanded: state.navReducer.isExpanded,
        isExpandedClass: state.navReducer.isExpandedClass,
        
    }
}


export default connect(mapStateToProps, { logout, addFlashmessage, toggleSidenavExpand })(Nav);
