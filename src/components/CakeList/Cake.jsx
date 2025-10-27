import './cake.css'

export default function Cake({ img, name, desc }) {
  return (
    <div className='cake'>
      <img src={img} alt={name} className='photo-cake'/>
      <div className='cake-info'>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}