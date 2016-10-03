import React from 'react';
import { connect } from 'react-redux';
import { addFlashmessage } from '../actions/flashMessagesActions';

export default function (ComposedComponent) {
    class Authenticate extends React.Component {
        componentWillMount(){
            if(!this.props.isAuthenticated) {
                this.props.addFlashmessage({type: 'error', text: 'You need to log in to access this page'});
                this.context.router.push('/login');
            }
        }
        render() {
            return (
                <ComposedComponent {...this.props } />
            );
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: React.PropTypes.bool.isRequired
    }
    Authenticate.contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.authReducer.isAuthenticated
        }
    }

    return connect(mapStateToProps, { addFlashmessage })(Authenticate);
}
