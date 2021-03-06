export interface MenuItemProps {
    disabled?: boolean;
    editable?: boolean;
    icon?: string;
    isFolder?: boolean;
    id: string;
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
