import React from 'react';
import MenuItem from '../menu-item';
import Mycontext from '../../context';

const MenuList = ({menus = []}) => {
  const dataFromContext = {
    name: 'John'
  };
  return (
    <Mycontext.Provider value={dataFromContext} >
      <ul className='menu-list-container'>
        {menus && menus.length > 0 && menus.map((menu) => (
          <MenuItem menu={menu} key={menu.label} />
        ))}
      </ul>
    </Mycontext.Provider>
  )
}

export default MenuList;
