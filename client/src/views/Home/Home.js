import React from 'react';
import './Home.css';
import Video from "../../components/Video/Video"
import Carousel from "../../components/Carousel/Carousel"
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';




function Home() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div><Video /> <div><Carousel /></div></div >
    );
}

export default Home;
