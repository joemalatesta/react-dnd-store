
import Inventory from "./Inventory"

const InventoryList = (props) => {

	return (
		<ul>
			{props.inventory.map((item, idx) =>
				<Inventory
					isList={true}
					key={idx}
					item={item}	
					addToPlayer={props.addToPlayer}		
				/>
			)}
		</ul>
	)
}

export default InventoryList