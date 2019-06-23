import * as React from 'react';
import { MenuProps } from './Menu-model';
import { MenuItem } from './MenuItem';

export default class Menu extends React.Component<MenuProps, any> {

    render() {
        return (
        <div className="menu">
            <div className="menu-items">
                {this.props.items.map(i => {
                    <MenuItem title={i.title} key={i.key}/>
                })}
            </div>
        </div>)
    }    
}
