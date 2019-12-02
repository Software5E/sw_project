import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About"
import NotFound from "./views/NotFound"
import Footer from "./components/Footer/Footer"
import Toolbar from "./components/Toolbar/Toolbar"
import SignUp from "./components/SignUp/SignUp"
import Container from 'react-bootstrap/Container';
//import SideDrawer from './components/SideDrawer/SideDrawer';
//import BackDrop from './components/BackDrop/BackDrop';
import './bootstrap/dist/css/bootstrap.min.css';
import './index.css'


class App extends Component {

  render() {

    return (
      <div>
        <header>
          <Toolbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/About" component={About} />
            <ProtectedRoute exact path="/List" component={AdminList} />
            <Route exact path="/Admin" component={AdminLogin} />
            <Route exact path="/signup" component={Home} />
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </main>
      </div>
    );
  }
}
export default App;
