import * as React from 'react';
import { MenuItemProps } from './Menu-model';
import { MenuItemFactory } from './Menu.factory';

const MenuItemWrapper: React.FunctionComponent<MenuItemProps> = (props) => {
    return <MenuItemFactory {...props}/>
}

export default MenuItemWrapper;