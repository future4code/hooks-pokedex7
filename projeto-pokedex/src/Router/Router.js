import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import DetailsPage from '../Pages/DetailsPage/DetailsPage'
import Pokedex from '../Pages/Pokedex/Pokedex'

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='/detailsPage' element={<DetailsPage/>}/>
                <Route path='/pokedex' element={<Pokedex/>}/>
            </Routes>
        </BrowserRouter>
    )
}