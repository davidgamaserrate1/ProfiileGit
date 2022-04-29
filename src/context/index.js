import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({});
    const [followers, setFollowers] = useState({});

    return (
        <context.Provider value={{
            userData,
            repos,
            followers,
            setUserData,
            setRepos,
            setFollowers
        }}>
            {props.children}
        </context.Provider>
    )
}