import React, { Component } from 'react';
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
    componentDidMount() {
        this.inputRef.focus();
    }

    render() {
        console.log('%c [Person.js] render()', 'color: #0ff; background-color: #000; padding: 3px 5px; border-radius: 3px;');
        return (
            <Wrapper>
                <p className={classes['text-t']} onClick={this.props.textClick}><i>I am {this.props.name} and I'm {this.props.age} years old!</i></p>
                {checkChildren(this.props.children)}
                <input
                    className={classes.input}
                    onChange={this.props.onChange}
                    value={this.props.name}
                    disabled={Boolean(!this.props.onChange)}
                    ref={(inputRef) => { this.inputRef = inputRef }} />
            </Wrapper>
        );
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    textClick: PropTypes.func,
    onChange: PropTypes.func
}

export default WithWrapping(Person, classes.person);