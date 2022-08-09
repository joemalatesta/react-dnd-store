import { useState } from "react"
import { inventory } from "../../data/store-data"
import InventoryList from './InventoryList'
import PlayerInventory from './PlayerInventory'


const Store = (props) => {

  const [bought, setBought] = useState([])

  const addToPlayer = (item) => {
    setBought([item, ...bought])
  }

  const removeFromPlayer = (idx) => {
    setBought(bought.filter((ing, i) => i !== idx))
  }

  const equipItem = () => {
    
  }

  const unequipItem = () => {

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
        <nav>
          <h1>Players Inventory</h1>
        </nav>
          <section>
            <PlayerInventory inventory={bought} equipItem={equipItem} unequipItem={unequipItem} removeFromPlayer={removeFromPlayer}/>
          </section>
      </div>
    </>
   )
}
 
export default Store