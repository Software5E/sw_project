import React from 'react';
//import './Home.css';
import Video from "../../components/Video/Video"
import Imgs from "../../components/Imgs/Imgs"
import SignUp from "../../components/SignUp/SignUp"
//import Container from 'react-bootstrap/Container';
function Home() {
    return (
        <div><Video /><div><Imgs /></div><div><SignUp /></div></div>
    );
}

export default Home;
