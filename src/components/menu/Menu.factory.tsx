import * as React from 'react';
import { MenuItemProps } from './Menu-model';
import { Icon } from 'antd';

export class BaseMenuItem extends React.Component<MenuItemProps, any> {
    disabled?: boolean | undefined;
    icon?: string | undefined;
    isFolder?: boolean | undefined;
    key: string;
    title: string;
    items?: MenuItemProps[];

    static defaultProps: MenuItemProps = {
        title: '',
        key: '',
        disabled: false,
        editable: false,
        icon: undefined,
        isFolder: false,
        items: []
    }

    constructor(props: MenuItemProps) {
        super(props);
        this.state = { hovering: false, selected: false }
    }

    setHovering(flag: boolean) {
        this.setState({ hovering: flag });
    }

    setSelected = () => {
        this.setState({ selected: !this.state.selected });
    }

    componentWillReceiveProps(props: MenuItemProps) {
        this.title = props.title;
        this.key = props.key;
        this.disabled = props.disabled;
        this.isFolder = props.isFolder;
        this.icon = props.icon;
        this.items = props.items ? props.items : [];
    }

    renderFolderIcon() {
        return this.state.selected ? <Icon type='folder-open'/> : <Icon type='folder'/>
    }

    render() {
        const {editable, isFolder, key, title, icon} = this.props;

        return (
        <li 
            className="menu__item"
            key={key}
            onMouseEnter={() => this.setHovering(true)}
            onMouseLeave={() => this.setHovering(false)}
        >
            <div className="menu__item__edit-icon">
                {editable && this.state.hovering ? <Icon type="edit"/> : null}
            </div>
            <div
                onClick={this.setSelected}
                className="menu__item__content"
            >
                {isFolder ? this.renderFolderIcon() : <Icon type={icon}/>}
                <div className="item__title">{title}</div>
                {this.props.children}
            </div>
        </li>)
    }
}

export const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
    return <BaseMenuItem {...props}/>
}

export const SubMenuItemWrapper: React.FunctionComponent<MenuItemProps> = (props) => {
    return (
    <ul className="menu__sub-list">
        {props.items ? props.items.map(i => (
            <BaseMenuItem {...i} editable={true}/>
        )) : null}
    </ul>)
}

export const MenuItemFactory = (props:MenuItemProps) => {
    return (
    <MenuItem {...props}>
        {props.items ? <SubMenuItemWrapper {...props}/> : null}
    </MenuItem>)
}
