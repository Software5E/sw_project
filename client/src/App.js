import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Newsletter from "./views/Newsletter/Newsletter";
import AdminList from "./views/AdminList/AdminList";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer/Footer";
import Toolbar from "./components/Toolbar/Toolbar";
import AdminLogin from "./views/AdminLogin/AdminLogin";
import Contact from "./views/ContactUs/ContactUs"
//import SignUp from "./components/SignUp/SignUp";
//import Container from 'react-bootstrap/Container';
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
//import SideDrawer from './components/SideDrawer/SideDrawer';
//import BackDrop from './components/BackDrop/BackDrop';
import "./bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
//import Newsletter from "./components/Newsletter/Newsletter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
      email: ""
    };
  }

  render() {
    return (
      <div>
        <header>
          <Toolbar />
        </header>
        <main>
          {/* Switch component to navigate through page ComponentS depending on GET requests */}
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Newsletter" component={Newsletter} />
            <ProtectedRoute exact path="/List" component={AdminList} />
            <Route exact path="/Admin" component={AdminLogin} />
            <Route exact path="/signup" component={Home} />
            <Route exact path="/contact" component={Contact} />
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
