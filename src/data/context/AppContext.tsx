import React, { createContext, useEffect, useState } from "react";
import { json } from "stream/consumers";
import { isJSDocReadonlyTag } from "typescript";

// type Tema = 'dark' | ''

interface AppContextProps {
    tema?: string
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider({children}: {children:React.ReactNode}) : JSX.Element {
    const [tema, setTema] = useState<any>('dark')

    function alternarTema() {
        const novoTema = tema === '' ? 'dark' : ''
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
    }

    useEffect(() => {
       const temaSalvo = localStorage.getItem('tema')
       setTema(temaSalvo)
    }, [])

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