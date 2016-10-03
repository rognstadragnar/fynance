import React from 'react';
import { connect } from 'react-redux';


class ProfilePage extends React.Component {

    render(){

        return(
            <div className='main-content'>
                <h1>profilepage</h1>
                <p>{this.props.user.username}</p>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
        user: state.authReducer.user
    }
}
export default connect(mapStateToProps)(ProfilePage)
