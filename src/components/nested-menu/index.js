import React from 'react';
import MenuList from '../menu-list';

const NestedMenu = ({menus = []}) => {
  return (
    <div className='nested-menu-container'>
      <MenuList menus={menus} />
    </div>
  )
}

export default NestedMenu;
