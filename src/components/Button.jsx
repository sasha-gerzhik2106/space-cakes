import React, {useState} from "react"
export default function Button({onClick, className, id, children}){
     const [menuOpen, setMenuOpen] = useState(false)
    function handleClick(){
        setMenuOpen(!menuOpen) 
    }
    return(
        <button onClick = {handleClick}
        className={className}
        id={id}>
        {children}
        </button>
    )
}