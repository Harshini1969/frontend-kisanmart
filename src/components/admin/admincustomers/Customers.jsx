import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Customer.css";
import { Button } from "@mui/material";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [editData, setEditData] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  // GET
  async function getCustomers() {
    try {
      const res = await axios.get("http://localhost:5000/admin/customers", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      setCustomers(res.data.customers);
    } catch (err) {
      console.log(err);
    }
  }

  // DELETE
  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:5000/admin/customer/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      getCustomers();
    } catch (err) {
      console.log(err);
    }
  }

  // EDIT
  function handleEdit(item) {
    setEditData(item);
    setEditForm({
      name: item.name,
      email: item.email,
      mobile: item.mobile
    });
  }

  // HANDLE CHANGE (clean version)
  function handleChange(e) {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  }

  // UPDATE
  async function handleUpdate() {
    try {
      await axios.put(
        `http://localhost:5000/admin/customer/${editData._id}`,
        editForm,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      );

      setEditData(null);
      getCustomers();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="table-container">
      <h1>Customers</h1>

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
            <tr key={item._id}>
              <td className="sno">{index + 1}</td>
              <td className="name-col">{item.name}</td>
              <td>{item.email}</td>
              <td className="phone-col">{item.mobile}</td>

              <td className="edit-col">
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </Button>
              </td>

              <td className="delete-col">
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EDIT POPUP */}
      {editData && (
        <div
          className="modal-overlay"
          onClick={() => setEditData(null)}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Edit Customer</h3>

            <input
              type="text"
              name="name"
              value={editForm.name}
              onChange={handleChange}
              placeholder="Name"
            />

            <input
              type="email"
              name="email"
              value={editForm.email}
              onChange={handleChange}
              placeholder="Email"
            />

            <input
              type="text"
              name="mobile"
              value={editForm.mobile}
              onChange={handleChange}
              placeholder="Mobile"
            />

            <div className="modal-actions">
              <Button variant="contained" onClick={handleUpdate}>
                Update
              </Button>

              <Button
                variant="outlined"
                onClick={() => setEditData(null)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Customers;