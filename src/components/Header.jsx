import { useContext} from 'react'
import { useNavigate, useLocation, Link, } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { UserContext } from '../context/UserContext';
import logo from '../images/logo_cart.png'
import SearchForm from './form-template/SearchForm';

const Header = () => {
    const location = useLocation()
    const { username } = useContext(UserContext)
    const navigate = useNavigate()


    const onLogOut = () => {
        localStorage.removeItem('username')
        navigate('/login')
    }


    return (
        <div>
            
                {location.pathname !== '/login' && location.pathname.includes('admin') && username &&
                    <Navbar expand="lg" variant="light" bg="light" className='justify-content-end'>

                        <Container>
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text className='hello'>
                                    Hello,  {username}
                                </Navbar.Text>
                                <Nav>
                                    <Nav.Link className='logout' onClick={onLogOut}>Logout</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>}

                {location.pathname !== '/login' && !location.pathname.includes('/admin') &&

                    <Navbar bg="light" expand="lg">
                        <Container className='d-flex justify-content-between'>
                            <Navbar.Brand onClick={() => navigate('/products')} className='logo'><img src={logo} style={{ width: '50px' }} alt="" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                           <SearchForm />

                            <Nav>
                                <Nav.Item><Link className='cardBut' to={'/cart'}>Shopping Cart</Link> </Nav.Item>

                            </Nav>
                        </Container>
                    </Navbar>
                }

        </div>


    )
}

export default Header