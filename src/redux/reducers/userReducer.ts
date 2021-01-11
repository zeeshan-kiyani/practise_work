import {ADD_USER_MESSAGE} from '../action-types/user-action-types';
let add_user_message:string = 'message here';
let delete_user_message:string = 'Delete user successfully';
export default function userReducer(state = add_user_message, action) {
    switch (action.type) {
        case ADD_USER_MESSAGE:
            return Object.assign({}, state, {
                addUserMessage: action.payload.addUserMessage
            });
        default:
        return state
    }
}