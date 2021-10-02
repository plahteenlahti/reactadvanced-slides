import React from 'react';
import { storiesOf } from '../../utils/story';

import TestComponent from './Hello';

storiesOf('Test Component', module).add('example', () => <TestComponent />);
