const WithWrapping = (WrappedComponent, classes) => (
    props => (
        <div className={classes}><WrappedComponent {...props} /></div>
    )
);

export default WithWrapping;