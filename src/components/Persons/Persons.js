import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.persons !== this.props.persons) {
            console.log('%c [Persons.js] shouldComponentUpdate()', 'color: #0ff; background-color: #000; padding: 3px 5px; border-radius: 3px;');
            return true;
        } else {
            return false;
        }
    }

    render() {
        console.log('%c [Persons.js] render()', 'color: #0ff; background-color: #000; padding: 3px 5px; border-radius: 3px;');

        return this.props.persons.map((person, index) => {
            return (
                <Person key={person.id} textClick={(this.props.clicked.bind(this, index))} name={person.name} age={person.age} onChange={(evt) => { this.props.changed(evt, person.id) }} />
            );
        });

    }

}

export default Persons;