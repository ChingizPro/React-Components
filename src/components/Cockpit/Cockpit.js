import { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = props => {
    // useEffect(() => { console.log('%c [Cockpit.js] useEffect()', 'color: #f0f; background-color: #000; padding: 3px 5px; border-radius: 3px;') });

    useEffect(() => {
        setTimeout(() => {
            alert('[Cockpit.js] useEffect()');
        }, 1000);
    }, [props.persons]);

    console.log('%c [Cockpit.js] render()', 'color: #f0f; background-color: #000; padding: 3px 5px; border-radius: 3px;');
    let textClasses = [];

    if (props.persons.length === 3) textClasses = [classes.bold, classes.triple];
    else if (props.persons.length === 2) textClasses = [classes.bold, classes.italic, classes.double];
    else if (props.persons.length === 1) textClasses = [classes.bold, classes.single];
    else textClasses = [classes.text];

    let toggleClasses = [classes.toggler];
    if (props.visible) toggleClasses.push(classes.red);

    return (
        <div>
            <h1 style={{ color: 'aqua' }}>A React App created with Components</h1>
            <p className={textClasses.join(' ')} style={{ fontSize: 18 }}>Just some text, nothing more</p>
            <div style={{ marginBottom: 10 }} onClick={props.resetPersons}><button className={classes.btn}>Reset</button></div>
            <div><button onClick={props.togglePersons} className={toggleClasses.join(' ')}>Toggle Persons</button></div>
        </div>
    );
}

export default Cockpit;