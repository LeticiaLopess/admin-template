import React, { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppContextProps {
    tema?: Tema
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider({children}: {children:React.ReactNode}) : JSX.Element {
    const [tema, setTema] = useState<Tema>('dark')

    function alternarTema() {
        setTema(tema === '' ? 'dark' : '')
    }

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext