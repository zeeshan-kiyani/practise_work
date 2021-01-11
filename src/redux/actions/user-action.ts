import * as user_actions from '../action-types/user-action-types'

export function addUser(payload) {
    return { type: user_actions.ADD_USER_MESSAGE, payload };
}