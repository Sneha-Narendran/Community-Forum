import React from "react";
import RecentTopics from "./RecentTopics";
import TopicButton from "./Topicbutton";
import './home.css';

const Home = () => {
  return (
    <div className="community-forum-container">
      <p className="community-forum-title">Community Forum</p>
      <p className="community-forum-sub-title">Find answers, ask questions to your fellow visitors. </p>
      <RecentTopics />
      <TopicButton />


    </div>
  );
};

export default Home;
