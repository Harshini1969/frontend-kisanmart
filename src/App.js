import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/SignUp/login";
import Register from "./components/SignUp/Register";
import AdminDashboard from "./components/admin/AdminDashboard";
import CustomerDashboard from "./components/customer/CustomerDashboard";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css"
import Customers from "./components/admin/Customers";

function App() {
  return (
    <div className="App">

      <BrowserRouter>   
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="/admin/Customer" element={<Customers/>}/>
          </Route>
          <Route path="/customerDashboard" element={<CustomerDashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;