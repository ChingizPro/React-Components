const WithWrapping = (WrappedComponent, classes) => (
    props => (
        <div className={classes}><WrappedComponent /></div>
    )
);

export default WithWrapping;