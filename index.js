import React from 'react';
// import {render} from 'react-dom';
// import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

// const root = createRoot(container);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
reportWebVitals();

