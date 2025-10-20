import './../styles-css/header.css'



export default function Header(){
return(
    <header className='header'>
        <div className="header-container">
           <a href="logo" className='brand-title'>Space Cakes</a>
                <ul className='nav-menu'>
                    <li className='nav-li'>Каталог</li>
                    <li className='nav-li'>Контакти</li>
                    <li className='nav-li'>Інгрідієнти</li>
                </ul>
            <button className='border-menu' id='border-button'>
                🍰
            </button>
        </div>
    </header>
)
}

