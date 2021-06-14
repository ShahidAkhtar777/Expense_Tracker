import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="85cfbc38-ce7e-4a08-8676-29273d21c34e" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
document.getElementById('root'));