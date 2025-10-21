import './../styles-css/header.css'
import Button from './Button'
import MenuButton from './Bmenu/MenuButton'
import { menuItems } from './Bmenu/menu-items'

export default function Header(){
   
return(
    <header className='header'>
        <div className="header-container">
           <a href="#" className='brand-title'>Space Cakes</a>
                <ul className='nav-menu'>
                    <li className='nav-li'>Каталог</li>
                    <li className='nav-li'>Контакти</li>
                    <li className='nav-li'>Інгрідієнти</li>
                </ul>
             
             <Button className='border-menu' id='border-button'> 🍰
                </Button>
                {menuItems && <MenuButton/>}
        </div>
    </header>
)
}

