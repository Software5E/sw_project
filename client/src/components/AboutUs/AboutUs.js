import React from 'react'
import './AboutUs.css'
import Timeline from '../Timeline/Timeline'
/*Always add alt to iamges to provide accesibility - About Us Component*/
class AboutUs extends React.Component {

    render() {
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
                            The evolution of lock security over the decades.
                    </p>
                    </div>
                </div>
                <span></span>
                <div>
                    {
                        //inluded Timeline component from Timeline.js}
                    }
                    <Timeline />
                </div>
                <div class="Facer-Comparison">
                    <div class="About-Container">
                        <div class="Facer-Comparison-Title">
                            How Does FaceR Compare?
                    </div>
                        <div class="separator"></div>
                        <p class="Facer-Comparison-Info">
                            See what makes FaceR more advanced than the rest.
                    </p>
                    </div>
                    <div class="Scale-Image">
                        <img src="../../big_table_edited.jpg" alt="Benefits of FaceR" />
                    </div>
                </div>
            </div>
        )

    }

}

export default AboutUs;