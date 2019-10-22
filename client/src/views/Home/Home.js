import React from 'react';
import './Home.css';
import Video from "../../components/Video/Video"
import Imgs from "../../components/Imgs/Imgs"
import Carousel from "../../components/Carousel/Carousel"
import { LinkContainer } from 'react-router-bootstrap'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';




function Home() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div><Video /><div><Imgs /></div></div>
    );
}

export default Home;
