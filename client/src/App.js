import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Toolbar from "./components/Toolbar/Toolbar"
import { Form, Modal, Button, ButtonToolbar } from 'react-bootstrap';
import SignUp from "./components/SignUp/SignUp"
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import Imgs from './components/Imgs/Imgs';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    SideDrawerOpen: false
  };
  drawerToggleClickerHandler = () => {
    this.setState((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {

    let backdrop;
    if (this.state.SideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: '100%' }}>
        {/* <Header /> */}
        < Toolbar drawerClickHandler={this.drawerToggleClickerHandler} />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {backdrop}
        {/* <SignUp /> Create Responsive Sign up form*/}

        <main style={{ marginTop: '56px' }}><Switch>

          <Route exact path="/Home" component={Home} />

          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route component={NotFound} />
        </Switch>

        </main>
        <Footer />

      </div >
    );
  }
}
export default App;
