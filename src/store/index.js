import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import ajaxMiddlewares from "./middlewares/ajaxMiddlewares";
import socketMiddlewares from "./middlewares/socketMiddlewares"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ajaxMiddlewares,socketMiddlewares)
);

const store = createStore(
  reducer,
  // preloadedState,
  enhancers
);

export default store;