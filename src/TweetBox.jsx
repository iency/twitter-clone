import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';
import db from './firebase';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Sniehov Volodymyr',
      username: 'iencyy',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://i.pinimg.com/originals/f6/98/9a/f6989abc9de245df4554686a9d65aca2.png"
    });

    setTweetMessage("");
    setTweetImage("");
  };
  
  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
          <Avatar src='https://i.pinimg.com/originals/f6/98/9a/f6989abc9de245df4554686a9d65aca2.png' />
          <input onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?" 
            type="text" />
        </div>
        <input onChange={e => setTweetImage(e.target.value)} className='tweetBox__inputImage' 
        value={tweetImage}
        placeholder="Optional: Enter image url" 
        type="text" />
        <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
