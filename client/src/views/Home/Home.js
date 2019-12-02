import React from "react";
//import Toolbar from '../../components/Toolbar/Toolbar'
import "./Home.css";
import Video from "../../components/Video/Video";
import Imgs from "../../components/Imgs/Imgs";
import SignUp from "../../components/SignUp/SignUp";
//import Container from 'react-bootstrap/Container';
function Home() {
  return (
    <div className="Home">
      <div>
        <Video />
      </div>
      <div className="Home1">
        <Imgs />
      </div>
      <div>
        <SignUp />
      </div>
    </div>
  );
}

export default Home;
