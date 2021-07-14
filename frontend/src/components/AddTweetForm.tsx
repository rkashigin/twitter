import React from "react";
import classNames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";

import { useHomeStyles } from "../pages/Home";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
}): React.ReactElement => {
  return (
    <div className={classes.addForm}>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`User avatar`}
          src="https://sun9-48.userapi.com/impf/c848520/v848520419/ed6d/j6GUXnxPdVw.jpg?size=960x960&quality=96&sign=b01846e592603504bdab2491270722f3&type=album"
        />
        <TextareaAutosize
          className={classes.addFormTextarea}
          placeholder="What's happening?"
        />
      </div>
      <div className={classes.addFormBottom}>
        <div
          className={classNames(
            classes.tweetFooter,
            classes.addFormBottomActions
          )}
        >
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          <span>280</span>
          <div className={classes.addFormCircleProgress}>
            <CircularProgress variant="static" size={20} thickness={5} />
            <CircularProgress
              style={{ color: "rgba(0, 0, 0, 0.1)" }}
              variant="static"
              size={20}
              thickness={5}
              value={100}
            />
          </div>
          <Button color="primary" variant="contained">
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
};
