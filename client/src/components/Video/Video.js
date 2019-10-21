import React from 'react';
import { Link } from 'react-router-dom';
import './Video.css';
import Carousel from "../../components/Carousel/Carousel"



const Video = () => {
    return (
        <div className="videoTag">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe src='https://www.youtube.com/embed/xp30DZNphGE?autoplay=1&showinfo=0&controls=0&loop=1'
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </div>
            <div><Carousel /></div>
        </div>

    )
}

export default Video;
