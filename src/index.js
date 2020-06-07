import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth'
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import tabBarReducer  from './store/reducers/tabBar';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  header: tabBarReducer,
  auth: authReducer
})



const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
