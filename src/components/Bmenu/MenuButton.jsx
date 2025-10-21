import './MenuButton.css'
import { menuItems } from "./menu-items"

export default function MenuButton(){
    return(
        <div className="menu-overlay">
            <ul className="menu-list">
                {
                 menuItems.map((item) => (
                        <li key={item.title}>{item.title}</li>
                 ))
                 }
             </ul>
        </div>
         
        
       
    )
}