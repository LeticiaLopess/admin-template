import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'

interface AuthContextProps {
    usuario?: Usuario 
    carregando?: boolean
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({}) 

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()

    if (usuarioFirebase.providerData[0]) {
        return {
            uid: usuarioFirebase.uid,
            nome: usuarioFirebase.displayName || "",
            email: usuarioFirebase.email || "",
            token,
            provedor: usuarioFirebase.providerData[0].providerId,
            imagemUrl: usuarioFirebase.photoURL || ""
        }

        } return {
            uid: usuarioFirebase.uid,
            nome: usuarioFirebase.displayName || "",
            email: usuarioFirebase.email || "",
            token,
            provedor:'',
            imagemUrl: usuarioFirebase.photoURL || ""
        }
}

function gerenciarCookie(logado: boolean) {
    if(logado) {
        Cookies.set('admin-template-leticia-auth', new Boolean(logado).toString(), {expires: 7
        })
    } else {
        Cookies.remove('admin-template-leticia-auth')
    }
}

export function AuthProvider(props: any) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario]= useState<Usuario | any>()

    async function configurarSessao(usuarioFirebase: any) {
        if(usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email

        } else {
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }

    async function loginGoogle() {
        try {
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
    
            configurarSessao(resp.user)
            route.push('/')
        } finally {
            setCarregando(false)
        }
    }

    async function logout() {
        try {
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        if (Cookies.get('admin-template-leticia-auth')) {
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return() => cancelar()
        } else {
            setCarregando(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext