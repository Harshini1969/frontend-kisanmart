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
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="products" element={<Products />} />
          </Route>

          {/* CUSTOMER ROUTES */}
          <Route 
            path="/customer" 
            element={
              <ProtectedRoute>
                <CustomerDashboard />
              </ProtectedRoute>
            }
          >
            <Route path="products" element={<CustomerProducts />} />
            <Route path="cart" element={<Cart />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;