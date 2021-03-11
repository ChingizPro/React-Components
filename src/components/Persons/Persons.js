import Person from './Person/Person';

const Persons = props => {
    console.log('%c [Persons.js] render()', 'color: #0ff; background-color: #000; padding: 3px 5px; border-radius: 3px;');

    return props.persons.map((person, index) => {
        return (
            <Person key={person.id} textClick={(props.clicked.bind(this, index))} name={person.name} age={person.age} onChange={(evt) => { props.changed(evt, person.id) }} />
        );
    });
}

export default Persons;