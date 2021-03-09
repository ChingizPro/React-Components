import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, errorMessage: error });
    }

    render() {
        if (this.state.hasError) {
            return <h2 style={{ backgroundColor: 'orange', color: 'red', height: '30px', width: '80%', padding: 20, margin: '5px auto' }}>bug detected</h2>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;