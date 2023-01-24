import React, { createContext } from "react";

interface AppContextData {
    nome: string
}

const AppContext = createContext({} as AppContextData )

export function AppProvider({children}: {children:React.ReactNode} ) { //component

    return (
        <AppContext.Provider value={{
            nome: 'Teste Context API'
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext