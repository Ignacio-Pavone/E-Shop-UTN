import './styles/General.css';
import Navbar from './components/Header';
import Footer from './components/Footer';
import Logout from './Pages/Logout';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register';
import Error404 from './Pages/Error404.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import './styles/_variables.scss';
import { useAuth } from './context/AuthContext.jsx';

function App() {

    const currentUser = useAuth();

    return (
        <ThemeProvider className="App" breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
            <Router>
                <Navbar />
                <div className='main-content'>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/ProductList' element={<ProductList/>} />
                    {currentUser && <Route path='/Login' element={<Login/>} />}
                    {currentUser && <Route path='/Logout' element={<Logout/>}/> }
                    {currentUser && <Route path='/Register' element={<Register/>} />}
                    <Route path='/Register' element={<Register/>} />
                    <Route path='/Error404' element={<Error404/>} />
                    <Route path='/producto/:productoId' element={<ProductDetails/>} />
                </Routes>
                </div>
                <div className='footer'><Footer/></div>
            </Router>
            </ThemeProvider>
    );
}

export default App;

