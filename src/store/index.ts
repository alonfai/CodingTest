import { configureStore } from 'redux-starter-kit';
import * as Interfaces from './interfaces';
import * as actions from './actions';
import rootReducer from './reducers';

const store = configureStore<Interfaces.ReduxStore>({
  reducer: rootReducer,
});

// HMR Support
if (process.env.NODE_ENV === 'development' && (module as any).hot) {
  (module as any).hot.accept('./reducers', () => {
    const newRootReducer = require('./reducers').default;
    store.replaceReducer(newRootReducer);
  });
}

/**
 * Get the type of the store dispatch (different from regular useDispatch() hook interface, as inside the store we use "redux-thunk" as the async middleware)
 */
export type AppDispatch = typeof store.dispatch;

export { Interfaces, actions };

export default store;
