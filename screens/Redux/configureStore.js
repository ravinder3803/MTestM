import { createStore } from 'redux';
import reducer from '../Redux/reducer';
const configureStore = () => {
    return createStore(reducer);
}
export default configureStore;