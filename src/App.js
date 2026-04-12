import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/SignUp/login";
import Register from "./components/SignUp/Register";
import AdminDashboard from "./components/admin/AdminDashboard";
import CustomerDashboard from "./components/customer/CustomerDashboard";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css"
import Customers from "./components/admin/admincustomers/Customers";
import Products from "./components/admin/adminProducts/Product";
import Dashboard from "./components/admin/admindashboard/Dahboard";
import ProtectedRoute from "./components/ProtectedRoutes/ProtuctedRoute";
import CustomerProducts from "./components/customer/CustomerProducts/CustomerProducts";
import Cart from "./components/customer/Cart/Cart";
import Orders from "./components/customer/CustomerOrders/Orders";
import AdmminOrders from "./components/admin/adminorders/AdminOrders";
import Customerdashboard from "./components/customer/customerDashboard/Customerdashboard";
import CustomerPayments from "./components/customer/CustomerPayments";
import AdminPayments from "./components/admin/AdminPayments";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingPage/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* ADMIN ROUTES */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="products" element={<Products />} />
             <Route path="order" element={<AdmminOrders />} />
              <Route path="payments" element={<AdminPayments/>} />
          </Route>

          {/* CUSTOMER ROUTES */}
          <Route 
            path="/customer" 
            element={
              <ProtectedRoute role="customer">
                <CustomerDashboard />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Customerdashboard/>} />
            <Route path="products" element={<CustomerProducts />} />
            <Route path="cart" element={<Cart />} />
             <Route path="orders" element={<Orders/>} />
             <Route path="payments" element={<CustomerPayments/>} />
             </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;