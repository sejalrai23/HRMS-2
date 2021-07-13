import React, { createContext } from 'react';

const contextData = {
    viewMrfID: "abcdef"
}

const AuthContext = createContext(contextData)

export default AuthContext;