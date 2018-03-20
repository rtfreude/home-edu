import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

import './standard.css'

class Standard extends Component {
  render() {
    return (
      <Panel>
         <Panel.Heading>
           <Panel.Title toggle>
             Click to see today's standards
           </Panel.Title>
         </Panel.Heading>
         <Panel.Collapse>
           <Panel.Body>
           <div className="container">
               <div xs={2} className="standard">
                 CCSS.MATH.PRACTICE.MP1
               </div>
               <div xs={4} className="standard-description">
                 Make sense of problems and persevere in solving them.
               </div>
               <div xs={6} className="standard-text">
                 Mathematically proficient students start by explaining to themselves the meaning
                 of a problem and looking for entry points to its solution. They analyze givens,
                 constraints, relationships, and goals. They make conjectures about the form and
                 meaning of the solution and plan a solution pathway rather than simply jumping into
                 a solution attempt.
               </div>
           </div>
           </Panel.Body>
         </Panel.Collapse>
       </Panel>

    )
  }
}

export default Standard;
