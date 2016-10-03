import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types.js';
import shortid from 'shortid';

export default (state = [], action = {}) => {
    switch(action.type) {
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text
                }
            ]
        case DELETE_FLASH_MESSAGE:
            const index = state.findIndex((s) => s.id === action.id)
            if (index >= 0 ){
                return  [
                        ...state.slice(0, index),
                        ...state.slice(index + 1)
                ]
            }
        default:
            return state
    }

};
