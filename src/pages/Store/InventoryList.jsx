import { useEffect, useState } from "react"
import Inventory from "./Inventory"

const InventoryList = (props) => {

	console.log(props.inventory);

	return (
		<ul>
			{props.inventory.map((item, idx) =>
				<Inventory
					key={idx}
					item={item}			
				/>
			)}
		</ul>
	)
}

export default InventoryList