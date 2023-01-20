import MenuLateral from "./MenuLateral"
import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"


interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <MenuLateral />
            <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
            <Conteudo>
                {props.children}
            </Conteudo>
        </div>
    )

}