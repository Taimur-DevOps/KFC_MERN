import "./App.css";
import logo from "./assets/logo.png"
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
import Profile from "./pages/Profile";
import ScrollToTop from "react-scroll-to-top";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./pages/Admin/Dashboard";
import AddNewProduct from "./pages/Admin/AddNewProduct";
import UsersDetail from "./pages/Admin/UsersDetail";
import Orders from "./pages/Admin/Orders";
import Products from "./pages/Admin/Products";


// import Footer from "./components/Footer";
const Footer = React.lazy(() => import('./components/Footer'))
// import Header from "./components/Header";
const Header = React.lazy(() => import('./components/Header'))
// import EverydayValue from "./pages/EverydayValue";
const EverydayValue = React.lazy(() => import('./pages/EverydayValue'))
// import Alacarte from "./pages/Alacarte";
const Alacarte = React.lazy(() => import('./pages/Alacarte'))
// import Signature from "./pages/Signature";
const Signature = React.lazy(() => import('./pages/Signature'))
// import Sharing from "./pages/Sharing";
const Sharing = React.lazy(() => import('./pages/Sharing'))
// import SnacksBeverges from "./pages/SnacksBeverges";
const SnacksBeverges = React.lazy(() => import('./pages/SnacksBeverges'))
// import Midnight from "./pages/Midnight";
const Midnight = React.lazy(() => import('./pages/Midnight'))

// import Login from "./pages/Login";
const Login = React.lazy(() => import('./pages/Login'))
// import Bucket from "./pages/Bucket";
const Bucket = React.lazy(() => import('./pages/Bucket'))
// import Register from "./pages/Register";
const Register = React.lazy(() => import('./pages/Register'))
// import Delivery from "./pages/Delivery";
const Delivery = React.lazy(() => import('./pages/Delivery'))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<div className="ImgLoader"> <img src={logo} alt="logo" /> loading... </div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/admin" element={<Admin/>} />
            <Route path="/admin/dashboard" element={<Dashboard/>} />
            <Route path="/admin/users" element={<UsersDetail/>} />
            <Route path="/admin/orders" element={<Orders/>} />
            <Route path="/admin/products" element={<Products/>} />
            <Route path="/admin/addProducts" element={<AddNewProduct/>} />

            <Route path="/bucket" element={<Bucket />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/profile" element={<Profile />} />
            
            <Route path="/Categories/everydayValue" element={<EverydayValue />} />
            <Route path="/Categories/Alacarte" element={<Alacarte />} />
            <Route path="/Categories/Signature" element={<Signature />} />
            <Route path="/Categories/Sharing" element={<Sharing />} />
            <Route
              path="/Categories/SnacksBeverages"
              element={<SnacksBeverges />}
            />
            <Route path="/Categories/Midnight" element={<Midnight />} />
          </Routes>
          <Footer />
        </Suspense>
        <ScrollToTop smooth />
      </header>

    </div>
  );
}

export default App;
