
import Inventory from "./Inventory"

const PlayerInventory = (props) => {
 

  return (
    <div store-inventories>
      <ul className="store-items">
        {props.inventory.length
        ?  props.inventory.map((item, idx) => (
          <Inventory
          islist={false}
          key={idx}
          idx={idx}
          item={item}
          removeFromPlayer={props.removeFromPlayer}
          />
          ))
          :
          <div>No Items</div>
        }
      </ul>
    </div>
  )
}

export default PlayerInventory