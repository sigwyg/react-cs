import React from 'react';

import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import JSXAddon from 'storybook-addon-jsx';
import Stepbar from './Stepbar';

setAddon(JSXAddon);

storiesOf('Forms', module)
    .addWithJSX('Stepbar', () => <Stepbar />);
