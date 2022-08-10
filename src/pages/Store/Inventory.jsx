const Inventory = (props) => {
		return (
		<ul className="margin">
			{props.isList
				? <button disabled={props.disabled} onClick={() => props.addToPlayer(props.item)}>Add</button>
				: <button onClick={() => props.removeFromPlayer(props.idx)}>Remove</button>
			}
			--{props.item.name}
		</ul>
		)
}

export default Inventory