import Inventory from "./Inventory"

const PlayerInventory = (props) => {
  return (
    <ul>
     
        { props.inventory?.map((item, idx) => (
            <Inventory
              key={idx}
              idx={idx}
              item={item}
            />
          ))
        }
    
    </ul>
  )
}

export default PlayerInventory