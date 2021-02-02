import React, { createContext, useContext, useReducer } from "react"

export const TodoLayerContext = createContext();

export const TodoLayer = ({ initialState, reducer, children }) => {
    return (
        <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </TodoLayerContext.Provider>
    )
};

export const useTodoLayerValue = () => useContext(TodoLayerContext);