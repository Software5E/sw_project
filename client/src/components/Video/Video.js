import React from 'react';
import './Video.css';

const Video = () => {
    return (

        <div className="videoTag" class="embed-responsive embed-responsive-16by9">
            <iframe src='https://www.youtube.com/embed/xp30DZNphGE?autoplay=1&showinfo=0&controls=0&loop=1'
                frameBorder='0'
                allow='encrypted-media'
                allowFullScreen
                title='video'
            />
        </div>

    )
}

export default Video;
