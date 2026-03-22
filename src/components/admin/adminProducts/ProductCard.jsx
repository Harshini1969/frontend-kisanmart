import React, { useState } from 'react'
import styles from './product.module.css'
import { Chip } from '@mui/material'

function ProductCard({ item, deleteProduct, editProduct }) {
  let { image,name,price,unit,isOrganic,quantity}=item;
  const [open, setOpen] = useState(false)
  const [product, setProduct] = useState({
    name,
    price,
    unit,
    quantity,
    isOrganic
  })

  function edit(event) {
    let value = event.target.value;
    let name = event.target.name;
    let obj = { ...product };
    obj[name] = value;
    setProduct(obj);
  }

  function handleSubmit() {
    editProduct({ ...product, _id: item._id })
    setOpen(false)
  }

  function handleIsorganic(event) {
    let value = event.target.checked;
    let name = event.target.name;
    let obj = { ...product };
    obj[name] = value;
    setProduct(obj);
  }

  function handleDelete() {
    let res = window.confirm("Want to delete this product?")
    if (!res) 
      return
    deleteProduct(item._id)
  }

  return (
    <div>
      <div className={styles.card}>
        <img src={image} alt={name} />
        <h1>{product.name}</h1>
        <p>₹ {product.price} / {product.unit}</p>

        <div className={styles.actions}>
          <button
            className={styles.editbtn}
            onClick={() => setOpen(true)}
          >
            Edit
          </button>

          <button
            className={styles.deletebtn}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>

        {product.isOrganic ? (
            <Chip
                label="Organic"
                sx={{
                backgroundColor: "green",
                color: "white",
                position: "absolute",
                top: "10px",
                left: "10px"
                }}
            />
        ) : ""}

        <Chip
           label={`${product.quantity}  ${product.unit}`}
          color="primary"
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px"
          }}
        />
      </div>

      {
        open ? (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <h2>Edit Product</h2>

            <label>Name</label>
            <input name="name" value={product.name} onChange={edit}/>

            <label>Price</label>
            <input name="price" value={product.price} onChange={edit}/>

            <label>Unit</label>
            <input name="unit" value={product.unit} onChange={edit}/>

            <label>Quantity</label>
            <input name="quantity" value={product.quantity} onChange={edit}/>

            <label className={styles.checkRow}>
              <input
                type="checkbox"
                name="isOrganic"
                checked={product.isOrganic}
                onChange={handleIsorganic}
              />
              Organic
            </label>

            <div className={styles.modalButtons}>

              <button
                className={styles.editbtn}
                onClick={handleSubmit}
              >
                Submit
              </button>

              <button
                className={styles.deletebtn}
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>

            </div>
          </div>
        </div>
        ) : ""
      }

    </div>
  )
}

export default ProductCard