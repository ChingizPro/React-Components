import React from 'react';

const AuthContext = React.createContext({ isAuthenticated: false, handleAuthentication: () => { } });

export default AuthContext;