import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
const [mode, setMode] = useState(false) // using a hook to set the initial state
function handleMode (){ // function which runs when the button is clicked and changes the state using the updater funtion
  setMode(!mode)
  }
  const appClass =mode ?"App dark" : "App light" //checking whether the mode is dark or light 
 //conditional rendering to determine which text to put
  return (
    <div className={appClass}> 
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{mode ?"App light" : "App dark"}</button> 
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;