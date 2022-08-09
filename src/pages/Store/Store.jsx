import { useState } from "react"

const Store = () => {
  const inventoryList = [
    {name: 'Arrows(20)',
     cost: '1 gp',
      weight: '1 lb.'},
    {name:'Staff',
    cost:'5 gp',
    weight:'4 lb.'},
    {name:'Backpack',
    cost:'2 gp',
    weight:'5 lb.'},
    {name:'Bedroll',
    cost:'1 gp',
    weight:'7 lb.'},
    {name:'Candle',
    cost:'1 cp',
    weight:'-'},
    {name:'Club',
    cost:'1 sp',
    weight:'2 lb.'},
    {name:'Dagger',
    cost:'2 gp',
    weight:'1 lb.'},
    {name:'Flask',
    cost:'2 cp',
    weight:'1 lb.'},
    {name:'Hammer',
    cost:'1 gp',
    weight:'3 lb.'},
    {name:'Healers Kit',
    cost:'5 gp',
    weight:'3 lb.'},
    {name:'Potion of Healing',
    cost:'50 gp',
    weight:'.5 lb.'},
    {name:'Pouch',
    cost:'5 sp',
    weight:'1 lb.'},
    {name:'Quiver',
    cost:'1 gp',
    weight:'1 lb.'},
    {name:'Rations(1 day)',
    cost:'5 sp',
    weight:'2 lb.'},
    {name:'Rope (50ft)',
    cost:'1 gp',
    weight:'10 lb.'},
    {name:'Short Sword',
    cost:'10 gp',
    weight:'2 lb.'},
    {name:'Spear',
    cost:'1 gp',
    weight:'3 lb.'},
    {name:'Tent',
    cost:'2 gp',
    weight:'20 lb.'},
    {name:'Tinderbox',
    cost:'5 sp',
    weight:'1 lb.'},
    {name:'Torch',
    cost:'1 cp',
    weight:'1 lb.'},
    {name:'Vial (empty)',
    cost:'1 gp',
    weight:'-'},
    {name:'Waterskin',
    cost:'2 sp',
    weight:'5 lb.(full)'},
    {name:'Whetstone',
    cost:'1 cp',
    weight:'1 lb'},
  ] 



  return ( 
    <>
      <h1>Store Items</h1>
      {inventoryList.map((item,idx)=> 
        <p>{item.name} - {item.cost} - {item.weight}</p>
      )}
      <h1>Player Items</h1>
    </>
   )
}
 
export default Store