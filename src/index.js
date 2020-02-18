import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PAContextProvider from './App/DataModel/PA-ContextProvider';
import LoginPage from './Components/LoginPage/LoginPage';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Register from "./Components/Register/Register"

// import PixLetDashboard from './PixLet-Dashboard';

const routing = (
    <Router>
      <div>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={Register} />
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  )

const PixLet = (<PAContextProvider>{routing}</PAContextProvider>)
ReactDOM.render(PixLet, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
