
import Inventory from "./Inventory"

const PlayerInventory = (props) => {
 

  return (
    <ul>
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
  )
}

export default PlayerInventory