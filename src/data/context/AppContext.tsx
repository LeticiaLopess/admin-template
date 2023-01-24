import { createContext } from "react";

interface AppContextData {
    nome: string
}

const AppContext = createContext({} as AppContextData )

export function AppProvider(props: any) { //component

    return (
        <AppContext.Provider value={{
            nome: 'Teste Context API'
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext