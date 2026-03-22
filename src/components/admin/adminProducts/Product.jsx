import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import styles from './product.module.css'
import { Grid } from '@mui/material'
import AddProduct from './AddProduct'
import axios from "axios"

function Products() {

  const [products, setProducts] = useState([])
  const [openAdd, setOpenAdd] = useState(false)
  const API = process.env.REACT_APP_BE_API_URL + "/product"

  // GET PRODUCTS
  async function fetchProducts(){
    try{
      let res = await axios.get(`${API}/getAll`)
      setProducts(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  // EDIT PRODUCT
  async function editProduct(updatedProduct){
    try{
      await axios.put(`${API}/edit/${updatedProduct._id}`, updatedProduct)
      fetchProducts()
    }
    catch(err){
      console.log(err)
    }
  }

  // DELETE PRODUCT
  async function deleteProduct(id) {
    try{
      await axios.delete(`${API}/delete/${id}`)
      fetchProducts()
    }
    catch(err){
      console.log(err)
    }
  }

  // ADD PRODUCT
  async function addProduct(newProduct) {
    try{
      await axios.post(`${API}/add`, newProduct)
      fetchProducts()
    }
    catch(err){
      console.log(err)
    }
  }

  let display = products.map((item) => {
    return (
      <Grid key={item._id} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
        <ProductCard 
          item={item}
          deleteProduct={deleteProduct}
          editProduct={editProduct}
        />
      </Grid>
    )
  })

  return (
    <div className={styles.cardsContainer}>
      <button 
        type="button"
        className={styles.addBtn}
        onClick={() => setOpenAdd(true)}
      >
         Add Product +
      </button>

      <Grid container spacing={2}>
        {display}
      </Grid>

      {
        openAdd ? (
          <div className={styles.addOverlay}>
            <div className={styles.addBox}>
              <AddProduct 
                addProduct={(data) => {
                  addProduct(data)
                  setOpenAdd(false)
                }} 
                onClose={() => setOpenAdd(false)}
              />
            </div>
          </div>
        ) : ""
      }

    </div>
  )
}

export default Products