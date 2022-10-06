
const EquippedButton = (props) => {

  return (
    <>
      {props.equipped === true
        ? <button className="margin" onClick={() => props.handleEquip()}>Unequip</button>
        : <button className="margin" onClick={() => props.handleEquip()}>Equip</button>
      }
    </>
  )
}

export default EquippedButton;