
const EquippedButton = (props) => {

 
  console.log(props.equipped);
  return (
    <>
      {props.equipped === true
        ? <button onClick={() => props.handleEquip()}>unEquip</button>
        : <button onClick={() => props.handleEquip()}>Equip</button>
      }
    </>
  )
}

export default EquippedButton;