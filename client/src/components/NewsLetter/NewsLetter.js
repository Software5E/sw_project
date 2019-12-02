import React from 'react'
import './NewsLetter.css'
import SignUp from '../SignUp/SignUp'

class NewsLetter extends React.Component {

    render()
    {
        return (
        <div >
            <div class="title fadeInDown">
                Stay Updated With Our 
                <div class="accent">Monthly Newsletter</div> 
                Download or Subscribe Below. 
            </div>
            <span></span> 
            <div class="Newsletters">    
                <div class="Newsletter-Container">
                    <div class="Newsletter-Title">  
                    This Month's Newsletter
                    </div>
                    <div class="separator"></div>
                    <p class="Previous-Newsletters">
                    Placeholder pdf here
                    </p>
                    <div class="Newsletter-Title">  
                        Previous Newsletters
                    </div>
                    <div class="separator"></div>
                    <p class="Previous-Newsletters">
                    Place past month's newsletters here
                    </p>
                    <div class="Newsletter-Title">  
                    Subscribe Now!
                    </div>
                    <div class="separator"></div>
                        <SignUp/>
                </div>
            </div>
            
        </div>
        )

    }

}

export default NewsLetter;