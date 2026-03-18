import React, { useState } from 'react'
import ProductCard from './ProductCard'
import styles from './product.module.css'
import { Grid } from '@mui/material'

function Products() {

const [products, setProducts] = useState([
  { 
     id: 1, 
     name: "Rice",
     price: 70, 
     unit: "kg", 
     quantity: 100,   
     isOrganic: true, 
     image: "/Ricebag.jpg"
     },
  { 
    id: 2,
     name: "Milk",
      price: 38, 
      unit: "liter", 
      quantity: 80 , 
      image: "/milk.jpg" 
    },
  { 
    id: 3, 
    name: "Apple", 
    price: 120, 
    unit: "kg", 
    quantity:50 , 
    image: "/Apple.jpg"
   },
  { 
    id: 4, 
    name: "Pomegranate", 
    price: 150, 
    unit: "kg", 
    quantity: 40 ,
    isOrganic: true, 
    image: "/pomegranate.jpg" 
  },
  { 
    id: 5, 
    name: "Orange", 
    price: 80, 
    unit: "kg", 
    quantity: 60 , 
    image: "/orange.jpg" 
  },
  {
     id: 6,
      name: "Tomato", 
      price: 40, 
      unit: "kg", 
      quantity: 70 , 
      isOrganic: true,
      image: "/Tomato.jpeg" 
    },
  {
     id: 7, 
     name: "Potato", 
     price: 30, 
     unit: "kg", 
     quantity: 120 ,
     isOrganic: true, 
     image: "/potato.jpg"
   },
  {
     id: 8,
      name: "Onion",
       price: 35, 
       unit: "kg", 
       quantity: 100 , 
       image: "/onion.jpg" 
    },
  { 
     id: 9,
     name: "Carrot",
     price: 50, 
     unit: "kg", 
     quantity: 65 , 
     image: "/carrot.jpg" 
    },
  {
     id: 10, 
     name: "Cabbage", 
     price: 28, 
     unit: "kg", 
     quantity: 45 , 
     image: "/cabbage.jpg"
    },
  {
     id: 11, 
     name: "Cauliflower", 
     price: 45, 
     unit: "kg", 
     quantity: 55 ,
      image: "/cauliflower.jpg"
   },
  {
      id: 12,
      name: "Spinach",
      price: 25, 
      unit: "bunch", 
      quantity:90 ,
      isOrganic: true,
      image: "/Spinach.jpg" 
    },
  { 
    id: 13, 
    name: "Capsicum", 
    price: 70, 
    unit: "kg", 
    quantity:40 , 
    image: "/capsicum.jpg" 
  },
  { 
    id: 14, 
    name: "Brinjal", 
    price: 40, 
    unit: "kg", 
    quantity: 60 , 
    image: "/brinjal.jpg" 
  },
  { 
    id: 15,
     name: "Mango", 
     price: 100, 
     unit: "kg", 
     quantity: 35 ,
     isOrganic: true, 
     image: "/mango.jpg"
     },
  {
     id: 16,
     name: "Banana", 
     price: 70, 
     unit: "kg", 
     quantity: 75 ,
     image: "/banana.jpg"
  }
])

let display = products.map((item) => {
  return (
    <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
      <ProductCard item={item} />
    </Grid>
  )
})

return (
  <div className={styles.cardsContainer}>
    <Grid container spacing={2}>
      {display}
    </Grid>
  </div>
)
}

export default Products