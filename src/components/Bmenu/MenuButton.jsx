import { menuItems } from "./menu-items"

export default function MenuButton(){
    return(
        
        <ul>
            {
                menuItems.map((item) => (
                    <li key={item.id}></li>
                ))
            }
        </ul>
    )
}