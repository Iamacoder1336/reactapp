import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi.js'
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueLists = [
  ...new Set(Menu.map((curElem) => {
    return curElem.category;
  })
  ),
  "All",
];
console.log(uniqueLists)


const Resturant = () => {
  // const myStyle = { color: "red"}
  const [menuData, setMenuData] = useState(Menu);  //hooks
  const[menuList, setMenuLists] = useState(uniqueLists)

  const filterItem = (category) => {

    if(category=== "All"){
      setMenuData(Menu);
      return;
    }
    const updatedLists = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedLists)
  };
  return (
    <>
    <Navbar filterItem ={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant
