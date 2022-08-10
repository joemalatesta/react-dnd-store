import { useState } from "react"
import { inventory } from "../../data/store-data"
import InventoryList from './InventoryList'
import PlayerInventory from './PlayerInventory'


const Store = () => {
  const [bought, setBought] = useState([])
  const [equipped, setEquipped]=useState(false)
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
        <nav>
          <h1>Players Inventory</h1>
        </nav>
            <PlayerInventory inventory={bought} equipped={equipped} setEquipped={setEquipped} removeFromPlayer={removeFromPlayer}/>
      </div>
    </>
   )
}
 
export default Store