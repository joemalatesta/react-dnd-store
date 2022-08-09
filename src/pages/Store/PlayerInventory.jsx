import Inventory from "./Inventory"

const PlayerInventory = (props) => {
  return (
    <ul>
      {props.inventory.length
      ?  props.inventory.map((item, idx) => (
        <>
          <Inventory
            key={idx}
            idx={idx}
            item={item}
            removeFromPlayer={props.removeFromPlayer}
            />
          <button>Equip Item</button>
        </>
        ))
      :
      <div>No Items</div>
      }
    </ul>
  )
}

export default PlayerInventory