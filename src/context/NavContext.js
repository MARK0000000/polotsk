import React, { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const NavContext = createContext(null);

export const NavProvider = ({ children }) => {
    const [activeSide, setActiveSide] = useLocalStorage('activeSide', 'main');
    

    function updateSide(side) {
        setActiveSide(side);
    }

    return (
        <NavContext.Provider value={{ activeSide, updateSide }}>
            {children}
        </NavContext.Provider>
    );
}