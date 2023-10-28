import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [cart,setCart]=useState(true)

  function addToCart(){
  setCart(!cart)
  }
  const cartMode =cart? "" : "in-cart" 
  return (
    <li className={cartMode}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{cart?"Add to cart" : "Remove from cart"}</button>
    </li>
  );
}

export default Item;