import { createContext } from "react";

const AppContext = createContext({
    nome: null
})

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