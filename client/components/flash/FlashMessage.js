import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class FlashMessage extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.destroyFlashMessage = this.destroyFlashMessage.bind(this);
    }
    handleClick(){
        this.props.deleteFlashMessage(this.props.message.id);
    }
    destroyFlashMessage(){
        setTimeout(() => {
            this.props.deleteFlashMessage(this.props.message.id)
        }, 2500)
    }
    componentDidMount(){
        this.destroyFlashMessage();
    }

    Component
    render(){
        const {id, type, text } = this.props.message;
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                onClick={this.handleClick}
            ><div className='flash-message'>
{text}</div></ReactCSSTransitionGroup>
        )
    }
}

FlashMessage.propTypes = {
    message: React.PropTypes.object.isRequired,
    deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage;
