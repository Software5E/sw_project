import React from 'react'
import './AboutUs.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

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
            {/*<div class="About-Row">
               <div class="About-Container">
                   <div class="About-Blurb">
                       <div class="Block-Title">
                           Our Mission
                       </div>
                       blah blah blah blah blah blah blah blah
                       blah blah blah blah blah blah blah blah  
                   </div>
               </div>
               <div class="About-Container">
               <div class="About-Blurb">
                       <div class="Block-Title">
                           Our Product
                       </div>
                       blah blah blah blah blah blah blah blah
                       blah blah blah blah blah blah blah blah  
                   </div>
               </div>
            </div>
            */}
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
                <img src='../../august-lock-photo.jpg'></img>
            </div>
            
            
        </div>
        )

    }

}

export default AboutUs;