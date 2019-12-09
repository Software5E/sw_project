import React from "react";
//import Toolbar from '../../components/Toolbar/Toolbar'
import "./Home.css";
import Video from "../../components/Video/Video";
import Imgs from "../../components/Imgs/Imgs";
import SignUp from "../../components/SignUp/SignUp";

//import Container from 'react-bootstrap/Container';
/**
 * Home page component - using container classnames 
 */

function Home() {
  return (
    <div className="container-fluid" >
      <div className="row h-100 my-auto">
        <div className="col-12 col-md-10 col-lg-8 mx-auto my-4">
          <div className="jumbotron bg-light">
            <Video />
          </div>
        </div>
      </div>
      <div className="row h-50">
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <div className="jumbotron bg-light">
            <Imgs />
          </div>
        </div>
      </div>
      <div className="row h-25">
        <div className="col-8 mx-auto">
          <SignUp className="mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Home;
