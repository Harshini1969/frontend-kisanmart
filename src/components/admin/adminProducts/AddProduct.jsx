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

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setProduct(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function handleSubmit() {
    addProduct(product)
    setProduct({
      name: "",
      price: "",
      unit: "",
      quantity: "",
      isOrganic: false
    })
  }

  return (
    <div>

     <h2>Add Product</h2>

      <label>Name</label>
        <input 
            name="name" 
            value={product.name} 
            onChange={handleChange} 
        />

      <label>Price</label>
        <input 
            name="price" 
            value={product.price} 
            onChange={handleChange} 
        />

        <label>Unit</label>
            <input 
            name="unit" 
            value={product.unit} 
            onChange={handleChange} 
            />

      <label>Quantity</label>
        <input 
        name="quantity" 
        value={product.quantity} 
        onChange={handleChange} 
        />

      <label className={styles.checkRow}>
        <input
          type="checkbox"
          name="isOrganic"
          checked={product.isOrganic}
          onChange={handleChange}
        />
        Organic
      </label>

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

export default AddProduct