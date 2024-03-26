"use client"
import React, { createContext, useContext, useState } from 'react';

const adminContext = createContext();

export const AdminProvider = ({ children }) => {

    const [isAdmin, setIsAdmin] = useState(false)

    function Login() {
        setIsAdmin(() => !isAdmin)
    }

    const contextValue = { isAdmin, Login };

    return (
        <adminContext.Provider value={contextValue}>
            {children}
        </adminContext.Provider>
    );
};

export const useAdmin = () => {
    const context = useContext(adminContext);
    // if (!context) {
    //     throw new Error('useAdmin must be used within a adminContext');
    // }
    return context;
};