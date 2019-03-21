import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

// install right before or when our application starts.
// before we mount our app component to the DOM 
// takes the reducer as input. 
// we usually store the reducers in their own files
const store = createStore(reducer);

// Provider is a helper component. Allows us to inject our store to react components
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


