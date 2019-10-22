import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About"
import NotFound from "./views/NotFound"
import Footer from "./components/Footer/Footer"
import Toolbar from "./components/Toolbar/Toolbar"
//import SignUp from "./components/SignUp/SignUp"
//import SideDrawer from './components/SideDrawer/SideDrawer';
//import BackDrop from './components/BackDrop/BackDrop';
import { ModalBody, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  // state = {
  //   SideDrawerOpen: false
  // };
  // drawerToggleClickerHandler = () => {
  //   this.setState((prevState) => {
  //     return { SideDrawerOpen: !prevState.SideDrawerOpen };
  //   });
  // };

  // backdropClickHandler = () => {
  //   this.setState({ SideDrawerOpen: false });
  // };

  render() {

    // let backdrop;
    // if (this.state.SideDrawerOpen) {
    //   backdrop = <BackDrop click={this.backdropClickHandler} />;
    // }
    return (

      <div>
        < Toolbar />{/*//drawerClickHandler={this.drawerToggleClickerHandler} /> */}{/*<SideDrawer show={this.state.SideDrawerOpen} /> */}
        {/* {backdrop} */}
        {/* <SignUp /> Create Responsive Sign up form*/}
        <main role="main" class="flex-shrink-0">
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/About" component={About} />
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
