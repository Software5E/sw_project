import React from 'react'
import './Timeline.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
//import 'react-vertical-timeline-component/style.min.css';

class Timeline extends React.Component {

    render() {
        return (
        <VerticalTimeline contentStyle={{ background: '#000'}}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#A9A9A9', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #A9A9A9' }}
    /*date="2011 - present"*/
    /*iconStyle={{ background: '#000', color: '#fff' }}*/
    
  >
    <h3 className="vertical-timeline-element-title block-title">Tumbler Lock</h3>
    <h4 className="vertical-timeline-element-subtitle block-text">1778</h4>
    <p className="block-text">
    uses pins of varying lengths to prevent the lock from opening without the correct key
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#A9A9A9', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #A9A9A9' }}
    /*date="2010 - 2011"*/
    /*iconStyle={{ background: '#000', color: '#fff' }}*/
  >
    <h3 className="vertical-timeline-element-title block-title">Flat Key</h3>
    <h4 className="vertical-timeline-element-subtitle block-text">1851</h4>
    <p className="block-text">
    key with serrated edges as well as pins of varying lengths within the lock itself
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#808080', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #808080' }}
    /*date="2008 - 2010"*/
    /*iconStyle={{ background: '#000', color: '#fff' }}*/

  >
    <h3 className="vertical-timeline-element-title block-title">Electronic Locks</h3>
    <h4 className="vertical-timeline-element-subtitle block-text">1970s</h4>
    <p className="block-text">
     lock or unlock with the assistance of an electrical current
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#808080', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #808080' }}
    /*date="2006 - 2008"*/
    /*iconStyle={{ background: '#000', color: '#fff' }}*/
  >
    <h3 className="vertical-timeline-element-title block-title">Smart Lock</h3>
    <h4 className="vertical-timeline-element-subtitle block-text">2014</h4>
    <p className="block-text">
    opens wirelessly with authorized user authentication
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#FF0000', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #FF0000' }}
    /*date="April 2013"*/
    /*iconStyle={{ background: '#000', color: '#fff' }}*/
  >
    <h3 className="vertical-timeline-element-title block-title">FaceR</h3>
    <h4 className="vertical-timeline-element-subtitle block-text">2020</h4>
    <p className="block-text">
      uses facial recognition as a form of user authentication to unlock 
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
        )
    }

}

export default Timeline;