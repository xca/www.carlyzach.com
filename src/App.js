import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";

// routes
import Home from "./Home";
import Functions from "./Functions";

class App extends Component {
  render() {
    return (
      <body>
        <Router>
          <div>
            <header>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                  CarlyZach
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/functions">
                        Functions
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
            <main className="App container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/functions" component={Functions} />
                <Redirect to="/" />
              </Switch>
            </main>
            <footer className="pl-2 footer">
              <a href="https://github.com/blaskovicz">CarlyZach on Github</a>
            </footer>
          </div>
        </Router>
      </body>
    );
  }
}

export default App;
