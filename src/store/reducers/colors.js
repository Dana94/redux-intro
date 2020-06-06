
const initialState = {
    colors: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COLOR':
            const colors = [...state.colors];
            colors.push(action.color);
            return {
                colors: colors
            }
        case 'REMOVE_COLOR':
            return {
                colors: state.colors.filter(color => color !== action.color)
            }
        default:
            return state;
    }
}

export default reducer;
