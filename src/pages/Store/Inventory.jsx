import { useState } from "react"
import EquippedButton from "../../components/EquippedButton/EquippedButton"

const Inventory = (props) => {
	const [equipped, setEquipped]=useState(false)

  const handleEquip = () => {
    setEquipped(!equipped)
  }
	
		return (
		<ul>
			{props.isList
				? <button className='margin' disabled={props.disabled} onClick={() => props.addToPlayer(props.item)}>+</button>
				: <>
						<button className='margin' onClick={() => props.removeFromPlayer(props.idx)}>X</button>
						<EquippedButton handleEquip={handleEquip} equipped={equipped}/>
					</>
			}
			{props.item.name}
		</ul>
		)
}

export default Inventory