import { SET_CURRENT_USER } from '../actions/types';

const intialState = {
    isAuthenticated: false,
    user: {}
}
export default (state = intialState, action ={}) => {

    switch(action.type){
        case SET_CURRENT_USER:

            return {
                isAuthenticated: Object.keys(action.user).length !== 0,
                user: action.user
            }
        default:
            return state;
    }
}
