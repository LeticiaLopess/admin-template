interface AuthInputProps {
    label: string
    valor: any
    obrigatorio?: boolean
    naoRenderizarQuando?: boolean
    tipo?: 'text' | 'email' | 'password'
    valorMudou: (novoValor: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return props.naoRenderizarQuando ? null : (
        <div className="flex flex-col">
            <label>{props.label}</label>
            <input 
                type={props.tipo ?? 'text'} 
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)} // se a função tiver sido realmente definida, aí chamaremos ela usando o e.target.value
                required={props.obrigatorio}
            />
        </div>
    )
}