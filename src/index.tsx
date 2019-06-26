import * as React from "react";
import * as ReactDOM from "react-dom";

import './styles/_all.scss';

import Menu from "./components/menu/Menu";

ReactDOM.render(
    <Menu items={[{ title: 'Boards', key: '1' }]} />,
    document.getElementById("menu")
);