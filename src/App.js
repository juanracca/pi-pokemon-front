import './App.css';
import LandingPage from './components/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import PokemonCreate from './components/PokemonCreate';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path = '/' element = {<LandingPage/>}/>
        <Route path = '/pokemons' element = {<Home/>}/>
        <Route path = '/pokemons/:id' element = {<Detail/>}/>
        <Route path = '/create' element = {<PokemonCreate/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
