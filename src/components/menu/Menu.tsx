import * as React from 'react';
import { MenuProps } from './Menu-model';
import MenuItemWrapper from './MenuItemWrapper';

export default class Menu extends React.Component<MenuProps, any> {

    render() {
        console.log(this.props.items)

        return (
        <div className="menu">
            <ul className="menu-items">
                {this.props.items.map(i => (
                    <MenuItemWrapper {...i}/>
                ))}
            </ul>
        </div>)
    }    
}
