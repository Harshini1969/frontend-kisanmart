
import React, { useState } from 'react';
import Header from './Navbar/Header';
import AdminSidebar from './Navbar/AdminSidebar';
import { Outlet } from 'react-router-dom';

function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <div style={{ display: "flex" }}>
        <AdminSidebar />

        <div
          style={{
            flex: 1,
            padding: "20px",
            background: "#93f9e8",
            marginRight: "20px",
            borderRadius: "15px",
          }}
        >
          <Outlet context={{ search, category }} />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;