import * as actionTypes from './actionTypes';

export const addColor = (color) => {
    return {
        type: actionTypes.ADD_COLOR,
        color: color
    }
}

const removeColorAction = (color) => {
    return {
        type: actionTypes.REMOVE_COLOR,
        color: color
    }
}

export const removeColorDelay = (color) => {
    // dispatch is from redux-thunk
    return dispatch => {
        setTimeout(() => {
            dispatch(removeColorAction(color));
        }, 3000)
    }
}
