import Macaroon from './Photo-cake/macaroon.jpg';
import Biscuit from './Photo-cake/biscuit.jpg';
import Muss from './Photo-cake/muss.jpg'

export const shortCakes = [
  { img: Macaroon, name: 'Макарон', desc: 'Хрусткість і ніжність в ідеальній гармонії ' },
  { img: Biscuit, name: 'Бісквітний торт', desc: 'Хмаринка ніжності в кремовому обрамленні' },
 
]

export const allCakes = [
  ...shortCakes,
   { img: Muss, name: 'Муссовий торт', desc: 'Вишуканий десерт для особливих моментів.'},

] 