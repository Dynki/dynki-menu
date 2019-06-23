import * as React from "react";

export interface MenuItem {
    disabled: boolean;
    icon: string;
    isFolder: boolean;
    key: string;
    title: string;
}

export interface MenuProps { 
    defaultExpandAll?: boolean;
    defaultExpandedKeys?: string[];
    defaultSelectedKeys?: string[];
    items: MenuItem[];
    onSelect?: (selectedKeys: string[]) => void;
}

export default class Menu extends React.Component<MenuProps, any> {

    render() {
        return (<div>Test</div>)
    }    
}
