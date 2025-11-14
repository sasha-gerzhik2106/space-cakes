import Macaroon from './Photo-cake/macaroon.jpg';
import Biscuit from './Photo-cake/biscuit.jpg';
import Muss from './Photo-cake/muss.jpg'
import CapCake from './Photo-cake/capcake.jpg'
import BentoCake from './Photo-cake/bentocake.jpg'

export const shortCakes = [
  { img: Macaroon, name: 'Макарон', desc: 'Хрусткість і ніжність в ідеальній гармонії ' },
  { img: Biscuit, name: 'Бісквітний торт', desc: 'Хмаринка ніжності в кремовому обрамленні' },
  { img: Muss, name: 'Мусовий торт', desc: 'Вишуканий десерт для особливих моментів.'},
]

export const allCakes = [
  ...shortCakes,
   {img:BentoCake, name: 'Бенто-торт', desc: 'Маленький торт, для маленького свята кожен день' },
   { img: CapCake, name: 'Капкейки', desc: 'Ніжні та яскраві десерти, що дарують радість у кожному шматочку'},

] 