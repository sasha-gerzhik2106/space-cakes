import './../styles-css/header.css'
export default function Header(){
return(
    <header>
        <div className="header">
            <button className="logo-btn">
                 <img src="../public/images/sp.jpg" alt="sp img" />
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