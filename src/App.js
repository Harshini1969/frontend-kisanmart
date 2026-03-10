import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/customer/login";
import Register from "./components/customer/Register";
import AdminDashboard from "./components/admin/AdminDashboard";
import CustomerDashboard from "./components/customer/CustomerDashboard";
import LandingPage from "./components/LandingPage/LandingPage";
import AppBar from "./components/LandingPage/AppBar";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <AppBar/>
        <Routes>

          <Route path="/" element={<LandingPage/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/customerDashboard" element={<CustomerDashboard />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;