import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home'
import Pokedex from '../pages/pokedex/Pokedex'
import DetailsPage from '../pages/detailsPage/DetailsPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="/pokedex" element={<Pokedex/>}/>
          <Route path="/pokemon/:name" element={<DetailsPage/>}/>    
      </Routes>
    </BrowserRouter>
  );
}
export default Router

