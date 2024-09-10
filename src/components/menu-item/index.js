import React, { useContext, useState } from 'react';
import MenuList from '../menu-list';
import Mycontext from '../../context';

const MenuItem = ({menu}) => {
  const [menuState, setMenuState] = useState({});
  const contextData = useContext(Mycontext);
  console.log(contextData);
  const handleToggle = (itemLabel) => {
    // const stateCopy = {...menuState};
    // if(stateCopy[itemLabel]) {
    //   stateCopy[itemLabel] = !stateCopy[itemLabel];
    // } else {
    //   stateCopy[itemLabel] = true;
    // }
    setMenuState({
      ...menuState,
      [itemLabel]: !menuState[itemLabel]
    });
  }
  console.log(menuState);
  return (
    <li>
      <div style={{display: 'flex', gap: '20px'}}>
        <p>{menu.label}</p>
        {
          menu && menu.children && menu.children.length ? <span onClick={() => handleToggle(menu.label)}>+</span> : null
        }
      </div>
      {menu && menu.children && menuState[menu.label] && (
        <MenuList menus={menu.children} />
      )}
    </li>
  )
}

export default MenuItem;
