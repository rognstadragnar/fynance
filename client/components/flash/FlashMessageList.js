import React from 'react';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../../actions/flashMessagesActions';

class FlashMessagesList extends React.Component {

    render(){
        const messages = this.props.messages.map(
            (message) => <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage}/>

        );
        return (
            <div className='flash-message-list'>
                {messages}
            </div>
        );
    }
}

FlashMessagesList.propTypes = {
    messages: React.PropTypes.array.isRequired,
    deleteFlashMessage: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
