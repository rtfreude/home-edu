import React, { Component } from 'react';
import './daily-header.css'

class DailyHeader extends Component {
  render() {
    return (
      <div className='main-container'>
        <div className='daily-header-container'>
          <p className='daily-header-text'><strong>STUDENT:</strong> Siri Freude</p>
          <p className='daily-header-text'><strong>DAY 1</strong></p>
          <p className='daily-header-text'><strong>Grade:</strong> Kindergarten</p>
        </div>
      </div>
    )
  }
}

export default DailyHeader;
