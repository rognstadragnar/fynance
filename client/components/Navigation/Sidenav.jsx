import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import SideNavItem from './SideNavItem';
import Dropdown from '../_common/Dropdown';
import Logo from '../../_static/img/logo/newLogo.svg';

import Pig from '../../_static/img/icons/bank/pig.svg';
import profilePic from '../../_static/img/trump.jpg';

import { toggleSidenavExpand } from '../../actions/navActions';

class Sidenav extends React.Component {
    constructor() {
        super()
        this.handleExpandClick = this.handleExpandClick.bind(this);
    }
    handleExpandClick() {
        console.log(this.props.isExpanded)
        this.props.toggleSidenavExpand();
    }

    render() {
        return (
            <div className={'sidenav ' + this.props.isExpandedClass}>
                <span className='toggle-nav-expand' onClick={this.handleExpandClick}>
                    <span></span>
                </span>
                
                <nav className={'sidenav-content ' + this.props.isExpandedClass}>
                    <ul>
                        <SideNavItem img={Pig} linkTo='/' name='Oversikt'/>
                        <Dropdown img={Pig} imgClass='sidenav-img' name='Mine kontoer'>
                            <SideNavItem linkTo='/' name='Brukskonto'/>
                            <SideNavItem linkTo='/' name='Sparekonto'/>
                        </Dropdown>
                        <Dropdown img={Pig} imgClass='sidenav-img' name='Mine kort'>
                            <SideNavItem linkTo='/' name='Kort1'/>
                            <SideNavItem linkTo='/' name='Kort2'/>
                        </Dropdown>
                    </ul>
                </nav>

            </div>
        )
    }
}
Sidenav.propTypes = {
    isExpanded: React.PropTypes.bool.isRequired,
    toggleSidenavExpand: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        isExpanded: state.navReducer.isExpanded,
        isExpandedClass: state.navReducer.isExpandedClass,
    }
}
export default connect(mapStateToProps, { toggleSidenavExpand })(Sidenav)
