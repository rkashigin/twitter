import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Avatar, IconButton, Paper, Typography } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RetweetIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";

import { useHomeStyles } from "../pages/Home/theme";

interface TweetProps {
  _id: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  text: string;
}

export const Tweet: React.FC<TweetProps> = ({
  _id,
  classes,
  user,
  text,
}: TweetProps): React.ReactElement => {
  return (
    <Link className={classes.tweetWrapper} to={`home/tweet/${_id}`}>
      <Paper
        className={classNames(classes.tweet, classes.tweetsHeader)}
        variant="outlined"
      >
        <Avatar
          className={classes.tweetAvatar}
          alt={`User ${user.username} avatar`}
          src={user.avatarUrl}
        />
        <div>
          <Typography>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetUserName}>@{user.username}</span>
            &nbsp;
            <span className={classes.tweetUserName}>•</span>&nbsp;
            <span className={classes.tweetUserName}>1 ч</span>&nbsp;
          </Typography>
          <Typography variant="body1">{text}</Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton color="primary">
                <CommentIcon className={classes.tweetFooterIcon} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton color="primary">
                <RetweetIcon className={classes.tweetFooterIcon} />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <LikeIcon className={classes.tweetFooterIcon} />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <ShareIcon className={classes.tweetFooterIcon} />
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
    </Link>
  );
};
