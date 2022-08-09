const Inventory = (props) => {
	
		return (

		<li >
			
			{props.item.name}
			{props.isList
				? <button disabled={props.disabled} onClick={() => props.addToPlayer(props.item)}>+</button>
				: <button onClick={() => props.removeFromPlayer(props.idx)}>X</button>
			}
		</li>
		)
	
}

export default Inventory