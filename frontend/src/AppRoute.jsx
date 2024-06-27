import {Routes, Route, Navigate, useLocation } from "react-router-dom"
import { useEffect } from "react"


import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

import ServiceDetail from "./pages/ServiceDetail"
import PaymentSuccess from "./pages/PaymentSuccess"
import PaymentFailed from "./pages/PaymentFailed"

import EmailDashboard from "./pages/EmailDashboard"
import ServiceDashboard from "./pages/ServiceDashboard"
import AnalyticsDashboard from "./pages/AnalyticsDashboard"

import { useAuthContext } from "./Context/AuthContext"

const AppRoute = () => {
  
  const {pathname} = useLocation();

  const {authUser} = useAuthContext();
  const serverEmails = ["AutoFixersAdmin@gmail.com"]

  const isServerUser = serverEmails.includes(authUser?.email);

  useEffect(() => {
    window.scrollTo(0, 0); 

  }, [pathname]); 

  return (
    <>
        <Routes>
            <Route path="/" element={isServerUser? <Navigate to="/AutoFixers/admin/dashboard/email"/> : <Home />}/>
            <Route path="/services" element={isServerUser? <Navigate to="/AutoFixers/admin/dashboard"/> : <Services />}/>
            <Route path="/about" element={isServerUser? <Navigate to="/AutoFixers/admin/dashboard"/> : <About />}/>
            <Route path="/cart" element={isServerUser? <Navigate to="/AutoFixers/admin/dashboard"/> : <Cart />}/>
            <Route path="/contact" element={isServerUser? <Navigate to="/AutoFixers/admin/dashboard"/> : <Contact />}/>
            
            
            <Route path="/service detail/:id" element={isServerUser? <Navigate to="/AutoFixers/admin/dashboard"/> : <ServiceDetail />}/>



            <Route path="/payment-success" element={<PaymentSuccess />}/>
            <Route path="/payment-failed" element={<PaymentFailed />}/>



            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>




            <Route path="/AutoFixers/admin/dashboard">
              <Route path="email" element={authUser ? <EmailDashboard />: <Navigate to="/" />} />
              <Route path="service/manage" element={authUser ? <ServiceDashboard />: <Navigate to="/" />} />
              <Route path="analytics" element={authUser ? <AnalyticsDashboard/>: <Navigate to="/" />} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRoute;
