import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>

          {/* Membership Officer at Mandai Wildlife Reserve */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Feb 2024 - Oct 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Membership Officer</h3>
            <h4 className="vertical-timeline-element-subtitle">Mandai Wildlife Reserve, Singapore</h4>
            <p>
              Processed membership applications, handled enquiries and feedback, and supported daily operations by managing supplies and ensuring smooth on-site membership services.
            </p>
          </VerticalTimelineElement>

          {/* IT Operations at NTU */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2022 - Feb 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Operations</h3>
            <h4 className="vertical-timeline-element-subtitle">Nanyang Technological University, Singapore</h4>
            <p>
              Provided IT support to over 1,400 users, managed and troubleshooted AV equipment, and led an automation project using Power Automate to streamline asset management processes.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
