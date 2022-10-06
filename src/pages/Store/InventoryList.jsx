import { isContentEditable } from "@testing-library/user-event/dist/utils"
import Inventory from "./Inventory"

const InventoryList = (props) => {
	return (
		<ul className='store-items'>
			{props.inventory.map((item) =>
				<Inventory
					key={item.id}
					isList={true}
					item={item}	
					addToPlayer={props.addToPlayer}		
				/>
			)}
		</ul>
	)
}

export default InventoryList