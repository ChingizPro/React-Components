const Cockpit = props => {
    return (
        <div>
            <h1 style={{ color: 'aqua' }}>A React App created with Components</h1>
            <p className={textClasses.join(' ')} style={{ fontSize: 18 }}>Just some text, nothing more</p>
            <div style={{ marginBottom: 10 }} onClick={this.resetPersons}><button className={classes.btn}>Reset</button></div>
            <div><button className={toggleClasses.join(' ')} onClick={this.togglePersons}>Toggle Persons</button></div>
        </div>
    );
}

export default Cockpit;