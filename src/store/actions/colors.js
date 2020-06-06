import * as actionTypes from './actionTypes';

export const addColor = (color) => {
    return {
        type: actionTypes.ADD_COLOR,
        color: color
    }
}

export const removeColor = (color) => {
    return {
        type: actionTypes.REMOVE_COLOR,
        color: color
    }
}
