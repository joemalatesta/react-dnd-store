import { useState, useEffect } from "react"
import { inventoryData } from "../../data/store-data"
import InventoryList from './InventoryList'
import PlayerInventory from './PlayerInventory'




const Store = () => {
  const [inventory, setInv] = useState([])
  const [playerInv, setPlayerInv] = useState([])
  
  useEffect(() => {
		setInv(inventoryData)
	}, [])

  useEffect(() => {
		
	}, [inventory,playerInv])
  
  const addToPlayer = (item) => {
    setInv(inventory.filter((obj)=> obj.id !== item.id))
    setPlayerInv([item, ...playerInv])
  }

  const removeFromPlayer = (item) => {
    setPlayerInv(playerInv.filter((obj)=> obj !== item))
    setInv([item, ...inventory])
  }

  return ( 
    <>
      <div>
        <nav>
        </nav>
        <section className="store-container">
          <div className="store-inventories">
            <h1>Adventurer's Shop</h1>
            <InventoryList inventory={inventory} addToPlayer={addToPlayer}/>
          </div>
          <div className="store-inventories">
            <h1>Players Inventory</h1>
            <PlayerInventory playerInv={playerInv} removeFromPlayer={removeFromPlayer}/>
          </div>
        </section>
        
      </div>
    </>
   )
}
 
export default Store