import { useState, useEffect } from "react"
import { inventory } from "../../data/store-data"
import InventoryList from './InventoryList'
import PlayerInventory from './PlayerInventory'




const Store = () => {
  const [bought, setBought] = useState([])

  useEffect(() => {
		
	}, [bought])
  
  const addToPlayer = (item) => {
    setBought([item, ...bought])
  }

  const removeFromPlayer = (idx) => {
    setBought(bought.filter((ing, i) => i !== idx))
  }

 

  return ( 
    <>
      <div>
        <nav>
          <h1>Adventurer's Shop</h1>
        </nav>
        <section>
          <InventoryList inventory={inventory} bought={bought} addToPlayer={addToPlayer}/>
        </section>
        <section>
          <h1>Players Inventory</h1>
          <PlayerInventory inventory={bought} removeFromPlayer={removeFromPlayer}/>
        </section>
        
      </div>
    </>
   )
}
 
export default Store