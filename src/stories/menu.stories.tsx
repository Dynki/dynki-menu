// src/stories/index.js

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from '../components/menu/Menu';

storiesOf("Menu", module).add("with text", () => (
    <Menu items={[]} />
));

