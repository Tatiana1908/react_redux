import reducers from './reducers/reducer';
import { createStore} from 'redux';


export default (state = {}) => {
    return createStore(reducers, state);
}
