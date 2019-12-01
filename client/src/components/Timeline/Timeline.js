import React from 'react'
import './Timeline.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends React.Component {

    render() {
        return (
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#A9A9A9', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    /*date="2011 - present"*/
    /*iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}*/
  >
    <h3 className="vertical-timeline-element-title block-title">Tumbler Lock</h3>
    <h4 className="vertical-timeline-element-subtitle block-text">1778</h4>
    <p className="block-text">
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#A9A9A9', color: '#fff' }}
    /*date="2010 - 2011"*/
    /*iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}*/
  >
    <h3 className="vertical-timeline-element-title block-title">Flat Key</h3>
    <h4 className="vertical-timeline-element-subtitle block-text">1851</h4>
    <p className="block-text">
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#808080', color: '#fff' }}
    /*date="2008 - 2010"*/
    /*iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}*/
  >
    <h3 className="vertical-timeline-element-title block-title">Electronic Locks</h3>
    <h4 className="vertical-timeline-element-subtitle block-text">1970s</h4>
    <p className="block-text">
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#808080', color: '#fff' }}
    /*date="2006 - 2008"*/
    /*iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}*/
  >
    <h3 className="vertical-timeline-element-title block-title">Smart Lock</h3>
    <h4 className="vertical-timeline-element-subtitle block-text">2014</h4>
    <p className="block-text">
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#32CD32', color: '#fff' }}
    /*date="April 2013"*/
    /*iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}*/
  >
    <h3 className="vertical-timeline-element-title block-title">FaceR</h3>
    <h4 className="vertical-timeline-element-subtitle block-text">2020</h4>
    <p className="block-text">
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
        )
    }

}

export default Timeline;