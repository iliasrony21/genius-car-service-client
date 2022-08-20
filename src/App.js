import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home/Home'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import Header from './Pages/Home/Header/Header'

import Services from './Pages/Home/Services/Services'
import Experts from './Pages/Home/Experts/Experts'
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails'
import SignUp from './Pages/SignUp/SignUp'
import CheckOut from './Pages/CheckOut/CheckOut'
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth'
import AddService from './Pages/AddService/AddService'
import ManageServices from './Pages/ManageServices/ManageServices'
import { ToastContainer } from 'react-toastify'
import Order from './Pages/Order/Order'

function App () {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route
          path='/service/:serviceId'
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route
          path='/checkout/:serviceId'
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/addservice'
          element={
            <RequireAuth>
              <AddService></AddService>
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/manage'
          element={
            <RequireAuth>
              <ManageServices></ManageServices>
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/orders'
          element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          }
        ></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/experts' element={<Experts></Experts>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
