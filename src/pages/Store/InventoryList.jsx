import Inventory from "./Inventory"

const InventoryList = (props) => {
	return (
		<ul>
			{props.inventory.map((item, idx) =>
				<Inventory
					key={idx}
					isList={true}
					item={item}	
					addToPlayer={props.addToPlayer}		
				/>
			)}
		</ul>
	)
}

export default InventoryList