import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = props => {
    useEffect(() => {
        setTimeout(() => {
            alert('[Cockpit.js] useEffect()');
        }, 1000);

        return () => { console.log('%c [Cockpit.js] cleaning process in useState()', 'color: #f00; background: #300; font-weight: bold; padding: 3px 5px; border-radius: 3px;') };
    }, []);

    // ? check useState() for different cases
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         alert('[Cockpit.js] 2nd useEffect()');
    //     }, 1000);

    //     return () => {
    //         console.log('%c [Cockpit.js] 2nd cleaning process in useState()', 'color: #297; background: #010; font-weight: bold; padding: 3px 5px; border-radius: 3px;')
    //         clearTimeout(timer);
    //     };
    // }, [props.persons]);

    console.log('%c [Cockpit.js] render()', 'color: #f0f; background-color: #000; padding: 3px 5px; border-radius: 3px;');
    let textClasses = [];

    if (props.personsLength === 3) textClasses = [classes.bold, classes.triple];
    else if (props.personsLength === 2) textClasses = [classes.bold, classes.italic, classes.double];
    else if (props.personsLength === 1) textClasses = [classes.bold, classes.single];
    else textClasses = [classes.text];

    let toggleClasses = [classes.toggler];
    if (props.visible) toggleClasses.push(classes.red);

    return [
        <h1 key='el1' style={{ color: 'aqua' }}>A React App created with Components</h1>,
        <p key='el2' className={textClasses.join(' ')} style={{ fontSize: 18 }}>Just some text, nothing more</p>,
        <div key='el3' style={{ marginBottom: 10 }} onClick={props.resetPersons}><button className={classes.btn}>Reset</button></div>,
        <div key='el4'><button onClick={props.togglePersons} className={toggleClasses.join(' ')}>Toggle Persons</button></div>
    ];
}

export default React.memo(Cockpit);

// * elments can also be rendered without adjacent wrapper as array elements 😮
// * "<> children </>" can be used as wrapper 😮