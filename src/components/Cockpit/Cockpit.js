import React, { useEffect, useRef } from 'react';
import AuthContext from '../../context/AuthContext';

import classes from './Cockpit.module.css';
import Wrapper from '../../hoc/Wrapper';

const Cockpit = props => {
    let togglerRef = useRef(null);

    useEffect(() => {
        // setTimeout(() => {
        //     alert('[Cockpit.js] useEffect()');
        // }, 1000);
        togglerRef.current.click();

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

    return (
        <Wrapper>
            <h1 key='el1' style={{ color: 'aqua' }}>A React App created with Components</h1>
            <p key='el2' className={textClasses.join(' ')} style={{ fontSize: 18 }}>Just some text, nothing more</p>
            <div key='el3' style={{ marginBottom: 10 }} onClick={props.resetPersons}><button className={classes.btn}>Reset</button></div>
            <div key='el4'>
                <button onClick={props.togglePersons} className={toggleClasses.join(' ')} ref={togglerRef}>Toggle Persons</button>
            </div>
            <AuthContext.Consumer>
                {(context) => <button className={classes.loginBtn} onClick={context.handleAuthentication}>Log in</button>}
            </AuthContext.Consumer>
        </Wrapper>
    );
}

export default React.memo(Cockpit);

// * elements can also be rendered without adjacent wrapper as array elements 😮
// * "<> children </>" can be used as wrapper 😮