// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { Provider } from 'react-redux'
// import store from './Store/store.jsx'

// createRoot(document.getElementById('root')).render(
//  <Provider store={store}>
// <StrictMode>
//     <App />
//   </StrictMode>, 
//  </Provider>
 
// )
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Connects Redux to React
import App from './App';
import store from './Store/store.jsx';
ReactDOM.render(
  <Provider store={store}> {/* Provide the store to your app */}
    <App />
  </Provider>,
  document.getElementById('root')
);
