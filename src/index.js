import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";

import { Provider } from 'react-redux'
import {store} from "./stores/invoiceConfigure";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
        <Provider store={store}>

    <App />
        </Provider>
    </ChakraProvider>
);


