import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import CardHome from './pages/card/cardHome';
import DetailHome from './pages/detail/detailHome';
import ModalHome from './pages/home-action/modalHome';
import GoogleButton from './components/google/GoogleLogin';
import Login from './components/user/Login';
import CreateHome2 from './pages/home-action/create-home/createHome2';
import CreateHome21 from './pages/home-action/create-home/createHome21';
import CreateHome22 from './pages/home-action/create-home/createHome22';
import CreateHome23 from './pages/home-action/create-home/createHome23';
import Register from './components/user/Register';
import ForgotPassword from "./components/user/ForgotPassword";
import ResetPassword from "./components/user/ResetPassword";
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import CreateHome24 from './pages/home-action/create-home/createHome24';
import Navbar from "./components/layout/Navbar";
import NavbarCreate from "./pages/home-action/create-home/navbarCreate";
import Test from "./components/test/test";
import SuccessModal from "./components/successmodal/successModal";
<<<<<<< HEAD
import AddressForm from "./components/updateProfile/UpdateProfile";
=======
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
>>>>>>> 362f92c2f1bed9db6a244e6b33f5a27a093f7dfb

function App() {
  const currentAuth = useSelector(state => state.auth)
  const [token, setToken] = useState(null)
  
  useEffect(() => {
    setToken(localStorage.getItem('token'))
  },[localStorage.getItem('token')])

  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        let response = await axios({
          method: 'get',
          url: 'http://localhost:3002/api/v1/auth/profile',
          headers: {
            Authorization: JSON.parse(token) 
          }
        })
        console.log(response);
      }
    }
    verifyToken();
  }, [token])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />}>
          <Route path='/' element={<CardHome />} />
          <Route path='/detail-home/:id' element={<DetailHome />} />
          <Route path='/create-home' element={<ModalHome />}></Route>
          {/*<Route path='/sign-up' element={<SignUp />} />*/}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/test' element={<AddressForm />} />
        </Route>
        <Route path={""} element={<NavbarCreate />}>
          <Route path='/create-home2' element={<CreateHome2 />}></Route>
          <Route path='/create-home2/1' element={<CreateHome21 />}></Route>
          <Route path='/create-home2/2' element={<CreateHome22 />}></Route>
          <Route path='/create-home2/3' element={<CreateHome23 />}></Route>
          <Route path='/create-home2/4' element={<CreateHome24 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
