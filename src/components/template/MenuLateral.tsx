import { IconeCasa, IconeAjustes, IconeSino } from "../icons";
import MenuItem from "./MenuItem";
import { isPropertySignature } from "typescript";

export default function MenuLateral() {
    return (
        <aside>
            <ul>
               <MenuItem url="/" texto="Início" icone={IconeCasa}/>
               <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
               <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>
        </aside>
    )
}