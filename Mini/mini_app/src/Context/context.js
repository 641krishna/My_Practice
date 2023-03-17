import React from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value="thapa">
        {children}
    </AppContext.Provider>
}

export default AppProvider;