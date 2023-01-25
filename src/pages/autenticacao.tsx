import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticação() {

    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function submeter() {
        if (modo === 'login') {
            console.log('login')
        } else {
            console.log('cadastrar')
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3" /* a foto fica escondida em dispositivos móveis e aparece a partir de dispositivos médios */> 
                <img 
                    src="https://source.unsplash.com/random"   alt="Imagem da Tela de Autenticação"
                    className="h-screen w-full object-cover" />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3" /* o dispositivo móvel terá o formulário maior na tela e sem a foto e a partir de dispositivos móveis a fpto ocupa 50% da tela */>
                <h1 className={`text-3xl font-bold mb-5`}>
                    {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Platadorma'}
                </h1>

                <AuthInput 
                    label="Email" 
                    tipo="email"
                    valor={email} 
                    valorMudou={setEmail}
                    obrigatorio
                    />

                <AuthInput
                    label="Senha" 
                    tipo="password"
                    valor={senha} 
                    valorMudou={setSenha}
                    obrigatorio
                    />

                <button onClick={submeter} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg pc-4 py-3 mt-6
                `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full"/>

                <button onClick={submeter} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg pc-4 py-3
                `}>
                    Entrar com o Google
                </button>

                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `}> Criar uma Conta Gratuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo('login')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `}> Entre com as Suas Credenciais</a>
                    </p>
                )}
            </div>
        </div>
    )
}