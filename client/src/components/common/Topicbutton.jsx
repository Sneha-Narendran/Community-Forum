import React, { useEffect, useState } from 'react';
import './Topicbutton.css';
import tags from '../mocks/topics.json';

const TopicButton = () => {
  return (
    <div>
      <p className='topic-button-title'>Topics</p>
      <div className='topic-button-tag-container'>
      {tags.map((tag, index) => {
        return (
          <div className='topic-button'>
            <p className='topic-button-text'>{tag}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default TopicButton;
