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
				? <button className='margin' style={{ background:'green', color:'white' }} disabled={props.disabled} onClick={() => props.addToPlayer(props.item)}>+</button>
				: <>
						<button className='margin' style={{ background:'red', color:'white'}} onClick={() => props.removeFromPlayer(props.item)}>X</button>
						<EquippedButton item={props.item} handleEquip={handleEquip} equipped={equipped}/>
					</>
			}
			{props.item.name}
		</ul>
		)
}

export default Inventory