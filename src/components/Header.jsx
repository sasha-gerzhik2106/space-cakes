import './../styles-css/header.css'
import spImage from './../images/sp.jpg'


export default function Header(){
return(
    <header className='header'>
        <div className="header-container">
            <button className="logo-btn">
                 <img src={spImage} alt="sp img" />
            </button>
            <h1 className="brand-title">
                Space-cakes
            </h1>
            <button className='border-menu'>
                🍰
            </button>
        </div>
    </header>
)
}