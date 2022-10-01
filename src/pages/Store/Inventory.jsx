import { useState } from "react"
import EquippedButton from "../../components/EquippedButton/EquippedButton"

const Inventory = (props) => {
	const [equipped, setEquipped]=useState(false)

  const handleEquip = () => {
    setEquipped(!equipped)
  }
	
		return (
		<li className="margin"  >
			{props.isList
				? <button disabled={props.disabled} onClick={() => props.addToPlayer(props.item)}>Add</button>
				: <>
						<button onClick={() => props.removeFromPlayer(props.idx)}>Remove</button>
						<EquippedButton handleEquip={handleEquip} equipped={equipped}/>
					</>
			}
			--{props.item.name}
		</li>
		)
}

export default Inventory