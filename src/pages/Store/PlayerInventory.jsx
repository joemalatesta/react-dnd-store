
import Inventory from "./Inventory"

const PlayerInventory = (props) => {
 

  return (
    <div>
      <ul className="store-items">
        {props.playerInv.length
        ?  props.playerInv.map((item) => (
          <Inventory
          islist={false}
          key={item.id}
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