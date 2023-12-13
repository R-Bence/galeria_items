import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Galeria from './galeria';
import ProductList from './Product';
import Home from './home';
import Layout from './layout';
import Tablazat from './tablazat';
import cart from './cart';

export default function Menu(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path="/" element={<Home />}/>
                    <Route path='galeria' element={<Galeria/>}></Route>
                    <Route path='termekek' element={<ProductList/>}></Route>
                    <Route path='tablazat' element={<Tablazat/>}></Route>
                    <Route path='cart   ' element={<cart/>}></Route>
                </Route>
            </Routes>
        </Router>
    )    
}
