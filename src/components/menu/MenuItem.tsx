import * as React from 'react';
import { MenuItemProps } from './Menu-model';

export const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => {

    const [hovering, setHovering] = React.useState(false);

    const { key, title } = props;

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
