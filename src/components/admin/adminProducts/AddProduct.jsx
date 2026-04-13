
import React, { useState } from 'react'
import styles from './product.module.css'

function AddProduct({ addProduct, onClose }) {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    unit: "",
    quantity: "",
    isOrganic: false
  })

  const [file, setFile] = useState(null); 

  function handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    let type = event.target.type;
    let checked = event.target.checked;

    let obj = { ...product };

    if (type === "checkbox") {
      obj[name] = checked;
    } else {
      obj[name] = value;
    }

    setProduct(obj);
  }

  function handleSubmit() {
    const formData = new FormData();

    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("unit", product.unit);
    formData.append("quantity", product.quantity);
    formData.append("isOrganic", product.isOrganic);

    if (file) {
      formData.append("image", file); 
    }

    addProduct(formData);

    setProduct({
      name: "",
      price: "",
      unit: "",
      quantity: "",
      isOrganic: false
    });

    setFile(null);
  }

  return (
    <div>

      <h2>Add Product</h2>

      <label>Name</label>
      <input name="name" value={product.name} onChange={handleChange} />

      <label>Price</label>
      <input name="price" value={product.price} onChange={handleChange} />

      <label>Unit</label>
      <input name="unit" value={product.unit} onChange={handleChange} />

      <label>Quantity</label>
      <input name="quantity" value={product.quantity} onChange={handleChange} />

      <label className={styles.checkRow}>
        <input
          type="checkbox"
          name="isOrganic"
          checked={product.isOrganic}
          onChange={handleChange}
        />
        Organic
      </label>

      <label>Image</label>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      
      {file && (
        <img src={URL.createObjectURL(file)} width="100" alt="preview" />
      )}

      <div className={styles.addButtons}>
        <button
          className={styles.addBtnSubmit}
          type="button"
          onClick={handleSubmit}
        >
          Add
        </button>

        <button
          className={styles.addBtnClose}
          type="button"
          onClick={onClose}
        >
          Close
        </button>
      </div>

    </div>
  )
}

export default AddProduct;