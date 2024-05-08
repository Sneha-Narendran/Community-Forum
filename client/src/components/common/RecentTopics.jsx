import React from 'react';
import './recentTopics.css';
import posts from '../mocks/posts.json';

const RecentTopics = () => {
  return (
    <div>
      <p className='recent-topics-title'>Do you know?</p>
      {posts.map((post, index) => {
        return (
          <div className='numbered-topics'>
            <div className='numbered'>{index + 1}.</div>
            <div className='recent-question'>{post.question}</div>
          </div>
        );
      })}
      <button className='load-more-button'>Load more</button>
      
    </div>
  );
};

export default RecentTopics;
