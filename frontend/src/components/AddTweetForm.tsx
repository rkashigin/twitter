import React from "react";
import classNames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import Alert from "@material-ui/lab/Alert";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";

import { useHomeStyles } from "../pages/Home/theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddTweet } from "../store/ducks/tweets/actionCreators";
import { selectAddFormState } from "../store/ducks/tweets/selectors";
import { AddFormState } from "../store/ducks/tweets/contracts/state";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  maxRows,
}): React.ReactElement => {
  const dispatch = useDispatch();
  const addFormState = useSelector(selectAddFormState);
  const [text, setText] = React.useState("");
  const textLimitPercent = Math.floor((text.length / MAX_LENGTH) * 100);
  const textCount = MAX_LENGTH - text.length;

  const handleChangeTextarea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(text));
    setText("");
  };
  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`User avatar`}
          src="https://sun9-48.userapi.com/impf/c848520/v848520419/ed6d/j6GUXnxPdVw.jpg?size=960x960&quality=96&sign=b01846e592603504bdab2491270722f3&type=album"
        />
        <TextareaAutosize
          rowsMax={maxRows}
          value={text}
          onChange={handleChangeTextarea}
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
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="static"
                  size={20}
                  thickness={5}
                  value={text.length > MAX_LENGTH ? 100 : textLimitPercent}
                  style={
                    text.length >= MAX_LENGTH ? { color: "red" } : undefined
                  }
                />
                <CircularProgress
                  style={{ color: "rgba(0, 0, 0, 0.1)" }}
                  variant="static"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            color="primary"
            variant="contained"
            disabled={
              addFormState === AddFormState.LOADING ||
              !text ||
              text.length > MAX_LENGTH
            }
            onClick={handleClickAddTweet}
          >
            {addFormState === AddFormState.LOADING ? (
              <CircularProgress size={16} color="inherit" />
            ) : (
              "Tweet"
            )}
          </Button>
        </div>
      </div>
      {addFormState === AddFormState.ERROR && (
        <Alert severity="error">
          An error occurred while sending your tweet :(
        </Alert>
      )}
    </div>
  );
};
