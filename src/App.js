import React from "react";
import Product from "./pages/Product";
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import Orders from './pages/Orders';
import Users from './pages/Users';
import Clients from './pages/Clients';
import NotFound from './pages/404';
import {
  Routes,
  Route,
} from "react-router-dom";
import UserContextProvider from "./context/UserContext"


function App() {
  return (
    <UserContextProvider>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/Products' element={<Product/>}/>
          <Route path='/Orders' element={<Orders/>}/>
          <Route path='/Users' element={<Users/>}/>
          <Route path='/Clients' element={<Clients/>}/>
          <Route path='/404' element={<NotFound/>}/>
        </Routes>
    </UserContextProvider>
  );
}

export default App;
