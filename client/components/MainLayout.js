import React from 'react';
import NavigationBar from './NavigationBar';
import MainFooter from './MainFooter';
import FlashMessagesList from './flash/FlashMessageList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class MainLayout extends React.Component {
    render(){
        return (
            <div className='app-container'>
                <NavigationBar location={location}/>
                <FlashMessagesList />

                <ReactCSSTransitionGroup
                  component="div"
                  className='main-content-container wrapper'
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
