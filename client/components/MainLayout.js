import React from 'react';
import NavigationBar from './Navigation/NavigationBar';
import Sidenav from './Navigation/Sidenav';
import MainFooter from './MainFooter';
import FlashMessagesList from './flash/FlashMessageList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

class MainLayout extends React.Component {
    render(){
        return (
            <div className='main-layout-content'>
                <NavigationBar location={location}/>
                <Sidenav />
                <FlashMessagesList />

                <ReactCSSTransitionGroup
                  component="div"
                  className={'main-content-container ' + this.props.isExpandedClass}
                  transitionName="example"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                  >
                    {React.cloneElement(this.props.children, {key: location.pathname})}
                </ReactCSSTransitionGroup>
                <MainFooter />
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        isExpanded: state.navReducer.isExpanded,
        isExpandedClass: state.navReducer.isExpandedClass,
    }
}
export default connect(mapStateToProps)(MainLayout)
