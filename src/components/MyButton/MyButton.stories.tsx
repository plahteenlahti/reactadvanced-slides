import React from 'react';
import { storiesOf } from '../../utils/story';

import { MyButton } from './MyButton';

storiesOf('01 Basic button', module).add('Default', () => <MyButton />);
