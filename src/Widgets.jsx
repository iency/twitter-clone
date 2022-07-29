import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder='Search Twitter' type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1553028151424552966"} />

        <TwitterTimelineEmbed 
          sourceType="profile"
          screenName="iencyy"
          options={{ height: 400 }}
        />
      
        <TwitterShareButton 
          url={'https://www.instagram.com/iencyyy/'}
          options={{ text: "#reactjs is awesome", via: "iencyy" }}
        />
      </div>
    </div>
  );
}

export default Widgets;