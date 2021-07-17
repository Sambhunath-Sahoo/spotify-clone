import React, { createContext, useContext, useReducer} from 'react';

export const StateProviderContext = createContext();

// here children is App component
export const StateProvider = ({ initialState, reducer, children }) => (
    <StateProviderContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateProviderContext.Provider>
);


export const useStateProviderValue = () => useContext(StateProviderContext);

