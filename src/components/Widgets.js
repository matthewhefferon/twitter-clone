import React from "react";
import "../styles/Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1313974379999494144"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="viztip"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://viztip.com"}
          options={{ text: "Check out these #tableau tutorials", via: "viztip" }}
        />
      </div>
    </div>
  );
}

export default Widgets;