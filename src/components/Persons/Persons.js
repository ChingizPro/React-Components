import Person from './Person/Person';

const Persons = props => {
    return props.persons.map((person, index) => {
        return (
            <Person key={person.id} textClick={(props.clicked.bind(this, index))} name={person.name} age={person.age} onChange={(evt) => { props.changed(evt, person.id) }} />
        );
        // ! events and classes don't work with Component itself
    });
}

export default Persons;