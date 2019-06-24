import * as React from 'react';
import { MenuItemProps } from './Menu-model';

const MenuItemWrapper: React.FunctionComponent<MenuItemProps> = (props) => {

    const [hovering, setHovering] = React.useState(false);

    const { key, title } = props;

    const getChildren = (item: MenuItemProps) => {
        return item.items ? getMenuItemFactory : null;
    }

    return (
    <div 
        className="item"
        key={key}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
    >
        <div className={hovering ? "item__edit-icon" : "item__edit-icon--visible"}></div>
        <div className="item__icon"></div>
        <div className="item__title">{title}</div>
    </div>)
}

export default MenuItemWrapper;