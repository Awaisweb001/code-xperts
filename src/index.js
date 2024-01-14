import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReduxProvider from './lib/store/ReduxProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ReduxProvider>
            <App />
        </ReduxProvider>
    </BrowserRouter>
);