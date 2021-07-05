import React from 'react';
import classNames from "classnames";
import {Avatar, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RetweetIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import {useHomeStyles} from "../pages/Home";

interface TweetProps {
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  text: string;
};

const Tweet: React.FC<TweetProps> = ({ classes, user, text }: TweetProps): React.ReactElement => {
  return (
    <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar className={classes.tweetAvatar} alt={`User ${user.username} avatar`} src={user.avatarUrl} />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
            <span className={classes.tweetUserName}>•</span>&nbsp;
            <span className={classes.tweetUserName}>1 ч</span>&nbsp;
          </Typography>
          <Typography variant="body1">
            {text}
          </Typography>
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
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Tweet;
