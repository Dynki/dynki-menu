export interface MenuItemProps {
    disabled?: boolean;
    icon?: string;
    isFolder?: boolean;
    key: string;
    title: string;
}

export interface MenuProps { 
    defaultExpandAll?: boolean;
    defaultExpandedKeys?: string[];
    defaultSelectedKeys?: string[];
    items: MenuItemProps[];
    onSelect?: (selectedKeys: string[]) => void;
}
