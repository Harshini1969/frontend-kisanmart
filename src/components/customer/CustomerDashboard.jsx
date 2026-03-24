import React, { useState } from "react";
import Header from "./Navbar/Header";
import CustomerSidebar from "./Navbar/CustomerSidebar";
import { Outlet } from "react-router-dom";

function CustomerDashboard() {
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

      {/* MAIN LAYOUT */}
      <div style={{ display: "flex" }}>
        {/* SIDEBAR */}
        <CustomerSidebar />

        {/* CONTENT */}
        <div style={{ flex: 1 }}>
          <Outlet context={{ search, category }} />
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;