import React, { Component } from 'react';
import './styles.css';
import App from '../app/app'
import { Provider } from 'react-redux';
import configureStore from '../../configureStore'
const initState =  []
const store = configureStore({ items: initState });

class ToDoCard extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <App initialItems={initState} />
                </div>
            </Provider>

        );
    }
}

export default ToDoCard;

