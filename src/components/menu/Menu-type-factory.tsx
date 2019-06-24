import * as React from 'react';
import { MenuItemProps } from './Menu-model';

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
        icon: undefined,
        isFolder: false,
        items: []
    }

    constructor(props: MenuItemProps) {
        super(props);
        this.state = { hovering: false }
    }

    setHovering(flag: boolean) {
        this.setState({ hovering: flag });
    }

    componentWillReceiveProps(props: MenuItemProps) {
        this.title = props.title;
        this.key = props.key;
        this.disabled = props.disabled;
        this.isFolder = props.isFolder;
        this.icon = props.icon;
        this.items = props.items ? props.items : [];
    }

    render() {
        const {key, title} = this.props;

        return (
            <li
                onMouseEnter={() => this.setHovering(true)}
                onMouseLeave={() => this.setHovering(false)}
                className="item"
                key={key}
            >
                <div className={this.state.hovering ? "item__edit-icon" : "item__edit-icon--visible"}></div>
                <div className="item__icon"></div>
                <div className="item__title">{title}</div>
            </li>
        )
    }
}

export const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
    return <BaseMenuItem {...props}/>
}


export const MenuFactory = (props:MenuItemProps) => {

    return <MenuItem {...props}/>
    
    // createMenuItem(item) {
    //     switch (type) {
    //         case 'text':
    //             return new TextCell(model, title);
    //         case 'select':
    //             return new SelectCell(model, title);
    //         default:
    //             return null;
    //     }
    // }
}

