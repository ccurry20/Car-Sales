import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.scss';
import {reducerFeature} from '../src/reducers/reducerFeature'
import {createStore} from 'redux';

const store = createStore(reducerFeature);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);