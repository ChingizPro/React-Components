import React from 'react';
import classes from './Person.module.css'
import Wrapper from '../../../hoc/Wrapper';
import WithWrapping from '../../../hoc/WithWrapping';

let checkChildren = (theProps) => {
    if (theProps) {
        return <p>{theProps}</p>;
    }
}

const person = (props) => {
    console.log('%c [Person.js] render()', 'color: #0ff; background-color: #000; padding: 3px 5px; border-radius: 3px;');
    return (
        <Wrapper>
            <p className={classes['text-t']} onClick={props.textClick}><i>I am {props.name} and I'm {props.age} years old!</i></p>
            {checkChildren(props.children)}
            <input className={classes.input} onChange={props.onChange} value={props.name} disabled={Boolean(!props.onChange)} />
        </Wrapper>
    );
}

export default WithWrapping(person, classes.person);