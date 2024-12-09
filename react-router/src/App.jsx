import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import About from './pages/About';
import Prodotti from './pages/Prodotti';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path='/about' element = {<About/>}></Route>
          <Route path = '/prodotti' element = {<Prodotti/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
