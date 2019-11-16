import React from 'react'
import './AboutUs.css'
import Timeline from '../Timeline/Timeline'

class AboutUs extends React.Component {

    render()
    {
        return (
        <div >
            <div class="title fadeInDown">
                We Use 
                <div class="accent">Facial Recognition Technology</div> 
                to Make Your Life More Secure.
            </div>
            <span></span> 
            <div class="History-of-Locks">    
                <div class="About-Container">
                    <div class="History-of-Locks-Title">  
                           History of Locks
                    </div>
                    <div class="separator"></div>
                    <p class="History-of-Locks-Info">
                    Information about the history of locks will go in this section!
                    </p>
                </div>
                {/*<img src='../../august-lock-photo.jpg'></img>*/}
            </div>
            <div>
                <Timeline/>
            </div>
            
            
        </div>
        )

    }

}

export default AboutUs;