import Header from '../header/Header';
import { Outlet } from 'react-router';
// import Footer from '../footer/Footer';
export const Layout = () =>{
    return(
        <>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}