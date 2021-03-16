import React, { Component } from 'react';
import AuthContext from '../../../context/AuthContext';
import PropTypes from 'prop-types';

import classes from './Person.module.css'
import Wrapper from '../../../hoc/Wrapper';
import WithWrapping from '../../../hoc/WithWrapping';

let checkChildren = (theProps) => {
    if (theProps) {
        return <p>{theProps}</p>;
    }
}

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElRef = React.createRef();
    }

    static contextType = AuthContext; // * this.context can be used in any place inside the class now
    // ! contextType is a required name

    componentDidMount() {
        // this.inputRef.focus();
        this.inputElRef.current.focus();
    }

    render() {
        let loginClasses = [classes.estate];
        loginClasses.push(this.props.isAuthenticated ? classes.auth : classes.notauth);

        console.log('%c [Person.js] render()', 'color: #0ff; background-color: #000; padding: 3px 5px; border-radius: 3px;');
        return (
            <Wrapper>
                {/* <AuthContext.Consumer>
                    {(context) => <p className={loginClasses.join(' ')}>{context.isAuthenticated ? 'Authenticated' : 'Please log in'}</p>}
                </AuthContext.Consumer> */
                    <p className={loginClasses.join(' ')}>{this.context.isAuthenticated ? 'Authenticated' : 'Please log in'}</p>
                }

                <p className={classes['text-t']} onClick={this.props.textClick}><i>I am {this.props.name} and I'm {this.props.age} years old!</i></p>
                {checkChildren(this.props.children)}
                <input
                    className={classes.input}
                    onChange={this.props.onChange}
                    value={this.props.name}
                    disabled={Boolean(!this.props.onChange)}
                    // ref={(inputRef) => { this.inputRef = inputRef }}
                    ref={this.inputElRef} />
            </Wrapper>
        );
    }
}

Person.propTypes = {
    name: PropTypes.string,
    isAuth: PropTypes.bool,
    age: PropTypes.number,
    textClick: PropTypes.func,
    onChange: PropTypes.func
}

export default WithWrapping(Person, classes.person);