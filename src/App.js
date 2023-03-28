import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import {useEffect } from "react";
import Login from "./components/login/Login";
import AllProducts from "./components/admin/products/AllProducts";
import AddProduct from "./components/admin/addProduct/AddProduct";
import Home from "./components/products/product-list/Home";
import CartPage from "./components/products/cart/CartHome/CartPage";
import ProductDetail from "./components/products/product-detail/ProductDetail";
import PrivateRoute from "./PrivateRoute";
import UserContextProvider from "./context/UserContext";

function App() {
  const username = localStorage.getItem('username')
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {

    if (username && pathname.toLowerCase().includes('/login')) {
      navigate('/admin/products')
    }

    if(pathname === '/'){
      navigate('/products')
    }
  }, [username, navigate, pathname])
  
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />

            <Route path="admin">
              <Route path="products" element={<PrivateRoute> <AllProducts /> </PrivateRoute>} />


              <Route path="add" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
            </Route>

            <Route path="products">
              <Route index element={<Home/>}/>
              <Route path=":id" element={<ProductDetail/>}/>
            </Route>

            <Route path="cart">
              <Route index element={<CartPage/>}/>
            </Route>
          </Route>

          <Route path="*" element={<Navigate to={'/products'} replace/>}/>
        </Routes>
      </UserContextProvider>

    </div>


  );
}

export default App;
