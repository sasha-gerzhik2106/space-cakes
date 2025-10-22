import './MenuButton.css'
import { menuItems } from "./menu-items"
import {useState} from 'react'
import { createPortal } from 'react-dom'
export default function MenuButton({onClick, className, children}){
         const [menuOpen, setMenuOpen] = useState(false)
    function handleClick(){
        setMenuOpen(true) 
        
        
        
    }
    function onClose(event){
        if (event.target === event.currentTarget) {
         setMenuOpen(false)   
        }
    }
    return(
        <>
        <button onClick = {handleClick}
        className={className}
        >
        {children}
        </button>
        {menuOpen && createPortal(<div className='close-menu' onClick={onClose}>
            <div className="menu-overlay">
            <button className='border-close' id='border-button'
            onClick={onClose}>🍰</button>
            <ul className="menu-list">
                {
                 menuItems.map((item) => (
                        <li key={item.title}>{item.title}</li>
                 ))
                 }
             </ul>
        </div>
            </div>,document.body)}
        </>
        
        
    )

}