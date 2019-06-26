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
        id: '',
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
        this.key = props.id;
        this.disabled = props.disabled;
        this.isFolder = props.isFolder;
        this.icon = props.icon;
        this.items = props.items ? props.items : [];
    }

    renderFolderIcon() {
        return this.state.selected ? <Icon type='folder-open'/> : <Icon type='folder'/>
    }

    renderIcon() {
        return this.props.icon ? <Icon type={this.props.icon}/> : null;
    }

    render() {
        const {editable, isFolder, id, title} = this.props;

        return (
        <li 
            className="menu__item"
            key={id}
            onMouseEnter={() => this.setHovering(true)}
            onMouseLeave={() => this.setHovering(false)}
        >
            <div className="menu__item__edit-icon">
                {editable && this.state.hovering ? <Icon type="edit"/> : null}
            </div>
            <div
                className="menu__item__content"
                onClick={this.setSelected}
            >
                {isFolder ? this.renderFolderIcon() : this.renderIcon()}
                <div className="item__title">{title}</div>
            </div>
            {this.props.children}
        </li>)
    }
}

export const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
    return <BaseMenuItem {...props}/>
}

export const SubMenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
    return (
    <ul className="menu__subitem">
        {props.items ? props.items.map((i, idx) => (
            <BaseMenuItem key={idx} {...i}>
                {i.isFolder && i.items && i.items.length > 0 ? <FolderMenuItem {...i}/> : <LeafMenuItem {...i} editable={true}/>}
            </BaseMenuItem>
        )) : null}
    </ul>)
}

export const FolderMenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
    return (
    <ul className="menu__folder">
        {props.items ? props.items.map((i, idx) => (
            <BaseMenuItem key={idx} {...i} editable={true}/>
        )) : null}
    </ul>)
}

export const LeafMenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
    const {editable, id, title, icon} = props;

    const [hovering, setHovering] = React.useState(false);
    const [selected, setSelected] = React.useState(false);

    return (
    <div
        className="menu__item__leaf"
        key={id}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
    >
        <div className="menu__item__edit-icon">
            {editable && hovering ? <Icon type="edit"/> : null}
        </div>
        <div
            className="menu__item__content"
            onClick={() => setSelected(!selected)}
        >
            {icon ? <Icon type={icon}/> : null}
            <div className="item__title">{title}</div>
        </div>
    </div>)
}


export const MenuItemFactory = (props:MenuItemProps) => {
    return (
    <MenuItem {...props}>
        {props.items ? <SubMenuItem {...props}/> : null}
    </MenuItem>)
}
