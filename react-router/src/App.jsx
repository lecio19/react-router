import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import About from './pages/About';
import Prodotti from './pages/Prodotti';
import NotFound from "./pages/NotFound";
import BlankLayout from "./layouts/BlankLayout";
import Blog from "./pages/Blog";
import PostsIndex from "./pages/posts";
import PostsShow from "./pages/posts/Show";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path='/about' element = {<About/>}></Route>
          <Route path = '/prodotti' element = {<Prodotti/>}></Route>
          <Route path="/blog">
            <Route index element={<PostsIndex />} />
            <Route path=":id" element={<PostsShow />} />
          </Route>
        </Route>
        <Route element={<BlankLayout />}>
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
