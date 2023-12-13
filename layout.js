import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return(
    <>
        <ul>
            <li>
                <Link to="/">Kezdőlap</Link>
            </li>
            <li>
                <Link to="galeria">Galéria</Link>
            </li>
            <li>
                <Link to="termekek">Termékek</Link>
            </li>
            <li>
                <Link to="Tablazat">Tablazat</Link>
            </li>
            <li>
                <Link to="cart">Kosár</Link>
            </li>
        </ul>

        <Outlet/>
    </>
    )
}

export default Layout; 
