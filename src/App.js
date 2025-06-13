import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import Discover from "./components/Discover";
import {Provider} from 'react-redux'
import store from './components/store'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <> 
    <Router>
      <Header /> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Provider store={store}>
          <Route exact path="/discover">
            <Discover />
          </Route>
        </Provider>
      </Switch>
    </Router>
    </>
  );
}

export default App;
