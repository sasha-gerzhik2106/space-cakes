import sp from "./assets/sp.svg";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import CakeList from "./components/CakeList/CakeList";
// import Catalog from './components/Catalog'
// import Footer from './components/Footer'
// import Contact from './components/Contact'
// import Ingredients from './components/Ingredients'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CakeList />
    </div>
  );
}
export default App;
