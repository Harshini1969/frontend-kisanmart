import React, { useState, useEffect } from "react";
import axios from "axios";
import './Customer.css'
import { Button } from "@mui/material";

function Customers() {

  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    try {
      const res = await axios.get("http://localhost:5000/admin/customers", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      setCustomers(res.data.customers);
    } 
    catch (err) {
      console.log(err);
    }
  }

  useEffect(()=> {
    getCustomers();
  }, []);

  return (
    <div className="table-container">
      <h1>Customers</h1>

      <div className="table-container">
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th className="sno">S.No</th>
              <th className="name-col">Name</th>
              <th>Email</th>
              <th className="phone-col">Phone number</th>
              <th className="edit-col">Edit</th>
              <th className="delete-col">Delete</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((item, index) => (           
              <tr key={index}>
                <td className="sno">{index + 1}</td>
                <td className="name-col">{item.name}</td>
                <td>{item.email}</td>
                <td className="phone-col">{item.mobile}</td>

                <td className="edit-col">
                  <Button 
                    variant="contained"
                    size="small"
                  >
                    Edit
                  </Button>
                </td>

                <td className="delete-col">
                  <Button 
                    variant="contained" 
                    color="error" 
                    size="small" 
                    style={{ marginLeft: "5px" }}
                  >
                    Delete
                  </Button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;