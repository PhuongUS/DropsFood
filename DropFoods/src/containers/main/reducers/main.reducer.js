import {

} from '../actions/main.actionTypes'

initialMainState = {

}

export const mainReducer = (state = initialMainState, action) => {
    const {type, payload} = action

    switch (type) {
        default:
            return state
    }
}