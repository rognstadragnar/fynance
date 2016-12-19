import { TOGGLE_SIDENAV_EXPAND } from '../actions/types';

const intialState = {
    isExpanded: true,
    isExpandedClass: 'expanded'
}
export default (state = intialState, action = {}) => {

    switch(action.type){
        case TOGGLE_SIDENAV_EXPAND:
            return {
                isExpanded: !state.isExpanded ? true : false,
                isExpandedClass: !state.isExpanded ? 'expanded' : 'collapsed'
            }
        default:
            return state;
    }
}
