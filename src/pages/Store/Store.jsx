import { useState } from "react"
import { inventory } from "../../data/store-data"
import InventoryList from './InventoryList'
import PlayerInventory from './PlayerInventory'


const Store = (props) => {

  const [stack, setStack] = useState([])


  return ( 
    <>
      <div>
      <nav>
      <h1>Adventurer's Shop</h1>
      <button >Clear Order</button>
      </nav>
      <section>
      <InventoryList inventory={inventory}/>
      <PlayerInventory />
      </section>
      </div>
    </>
   )
}
 
export default Store