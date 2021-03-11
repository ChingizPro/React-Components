import React from 'react';
import classes from './Person.module.css'

let checkChildren = (theProps) => {
    if (theProps) {
        return <p>{theProps}</p>;
    }
}

const person = (props) => {
    console.log('%c [Person.js] render()', 'color: #0ff; background-color: #000; padding: 3px 5px; border-radius: 3px;');
    return (
        <div className={classes.person}>
            <p className={classes['text-t']} onClick={props.textClick}><i>I am {props.name} and I'm {props.age} years old!</i></p>
            {checkChildren(props.children)}
            <input className={classes.input} onChange={props.onChange} value={props.name} disabled={Boolean(!props.onChange)} />
        </div>
    );
}

export default person;