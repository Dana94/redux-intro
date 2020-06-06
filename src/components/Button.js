import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Button.css';
import * as actions from '../store/actions/index.js';

const Button = props => {
    const [isAdded, setIsAdded] = useState(false);

    const addColorHandler = () => {
        setIsAdded(true);
        props.onAddColor(props.color);
    }

    const removeColorHandler = () => {
        setIsAdded(false);
        props.onRemoveColor(props.color);
    }

    return (
        isAdded ?
            <button onClick={removeColorHandler}>Remove <br/> {props.color}</button> :
            <button onClick={addColorHandler}>Add <br/> {props.color}</button>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onAddColor: (color) => dispatch(actions.addColor(color)),
        onRemoveColor: (color) => dispatch(actions.removeColor(color)),
    }
}

export default connect(null, mapDispatchToProps)(Button);
