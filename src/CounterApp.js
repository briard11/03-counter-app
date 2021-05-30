import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);

    //handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }
    return (
        <>
            <h1>- Counter App -</h1>
            <h2>Esta aplicacion es un contador</h2>
            <h2>{counter}</h2>
            <div id="divButton">
                <button onClick={handleSubtract}>-1</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleAdd}>+1</button>
            </div>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;