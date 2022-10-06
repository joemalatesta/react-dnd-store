import Inventory from "./Inventory"

const InventoryList = (props) => {
	return (
		<ul className='store-items'>
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