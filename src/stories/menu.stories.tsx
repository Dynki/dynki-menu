// src/stories/index.js

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from '../components/menu/Menu';

storiesOf("Menu", module).add("with text", () => (
    <Menu items={
        [{  title: 'Boards',
            id: '1', 
            icon: 'container',
            items: [{ 
                    title: 'Folder 1',
                    id: '2',
                    isFolder: true,
                    items: [{
                        title: 'Board 1',
                        id: 'b1'
                    },{
                        title: 'Board 2',
                        id: 'b2'
                    }]
            },
            { 
                title: 'Board 3',
                id: '3'
            }] 
        }]} />
));
