import React from 'react';
import { Switch, Route } from 'react-router-dom';
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistor from "./store/persistor";
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </PersistGate>
    </Provider>
  );
}

export default App;


