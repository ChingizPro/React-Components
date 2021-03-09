import React from 'react';
import classes from './Person.module.css'

let checkChildren = (theProps) => {
    if (theProps) {
        return <p>{theProps}</p>;
    }
}

const person = (props) => {
    return (
        <div className={classes.person}>
            <p className={classes['text-t']} onClick={props.textClick}><i>I am {props.name} and I'm {props.age} years old!</i></p>
            {checkChildren(props.children)}
            <input className={classes.input} onChange={props.onChange} value={props.name} disabled={Boolean(!props.onChange)} />
        </div>
    );
}

export default person;