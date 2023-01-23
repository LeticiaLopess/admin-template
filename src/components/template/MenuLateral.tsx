import { IconeCasa, IconeAjustes, IconeSino, IconeSair } from "../icons";
import MenuItem from "./MenuItem";
import { isPropertySignature } from "typescript";
import Logo from "./Logo";

export default function MenuLateral() {
    return (
        <aside className={`
            flex flex-col
            bg-gray-200 dark:text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-500
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
               <MenuItem url="/" texto="Início" icone={IconeCasa}/>
               <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
               <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>
            <ul>
               <MenuItem url="/notificacoes" texto="Sair" icone={IconeSair} onClick={() => console.log('logout')} 
               className={`
                    text-red-600 dark:text-red-400
                    hover:bg-red-400 hover:text-white
                    dark:hover:text-white
               `}/>
            </ul>
        </aside>
    )
}