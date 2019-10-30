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

class App extends Component {

  render() {

    return (
      <main style={{ background: 'black' }}>
        < Toolbar /><Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </main >
    );
  }
}
export default App;
