import React from "react";
import { Link } from "react-router-dom";
import './NewsLetter.css';

class NewsLetter extends React.Component {

    render()
    {
        return (
        <div >
            <div class="title fadeInDown">
                Stay Updated With Our 
                <div class="accent">Monthly Newsletter</div> 
                Download Below or Subscribe From Home. 
            </div>
            <span></span>
            <div class="Newsletters">    
                <div class="Newsletter-Container">
                    <div class="Newsletter-Title">  
                    This Month's Newsletter
                    </div>
                    <div class="separator"></div>
                    <div class="Newsletter-Links">
                        <p> <Link class="text-warning" target="_blank"> December.pdf </Link > {' '} </p>
                    </div>
                    <div class="Newsletter-Title">  
                        Previous Newsletters
                    </div>
                    <div class="separator"></div>
                    <p class="Newsletter-Links">
                        <p> <Link class="text-warning" target="_blank"> November.pdf </Link > {' '} </p>
                        <p> <Link class="text-warning" target="_blank"> October.pdf </Link > {' '} </p>
                        <p> <Link class="text-warning" target="_blank"> September.pdf </Link > {' '} </p>                    
                    </p>
                </div>
            </div>
        </div>
        )

    }

}

export default NewsLetter;