import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import DailyHeader from '../../components/dailyHeader/DailyHeader'
import DailyVideo from '../../components/videoPlayers/DailyVideo'
import Mathematics from '../../components/disciplines/math/Math'

class DailyLessonContainer extends Component {
  render() {
    return (
      <div>
        <DailyHeader />
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Daily Lesson Plan">
            Daily Lessons
          </Tab>
          <Tab eventKey={2} title="Math">
            <Mathematics />
          </Tab>
          <Tab eventKey={3} title="Science">
            Science
          </Tab>
          <Tab eventKey={4} title="Language Arts">
            Language Arts
          </Tab>
          <Tab eventKey={5} title="STEM">
            STEM
          </Tab>
          <Tab eventKey={6} title="Liberal Arts">
            Liberal Arts
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default DailyLessonContainer;
