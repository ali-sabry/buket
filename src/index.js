import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'App';

import { ContextProvider } from 'store/Context';


ReactDom.render(
   <ContextProvider>
      <BrowserRouter basename='/buket'>
        <App />
      </BrowserRouter>
   </ContextProvider>,
 document.getElementById('root'));