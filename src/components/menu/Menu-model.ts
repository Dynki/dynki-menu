export interface MenuItemProps {
    disabled?: boolean;
    icon?: string;
    isFolder?: boolean;
    key: string;
    title: string;
    items?: Array<MenuItemProps>;
}

export interface MenuProps { 
    defaultExpandAll?: boolean;
    defaultExpandedKeys?: Array<string>;
    defaultSelectedKeys?: Array<string>;
    items: Array<MenuItemProps>;
    onSelect?: (selectedKeys: string[]) => void;
}
