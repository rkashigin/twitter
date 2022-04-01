import React from "react";
import { useParams } from "react-router-dom";

import {
  fetchTweet,
  setTweet,
} from "../../../store/ducks/tweet/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsTweetLoading,
  selectTweetData,
} from "../../../store/ducks/tweet/selectors";
import { Tweet } from "../../../components/Tweet";
import { useHomeStyles } from "../theme";
import { CircularProgress } from "@material-ui/core";

export const FullTweet: React.FC = (props): React.ReactElement => {
  const classes = useHomeStyles();
  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const tweet = useSelector(selectTweetData);
  const isLoading = useSelector(selectIsTweetLoading);
  const tweetId = params.id;

  React.useEffect(() => {
    if (tweetId) {
      dispatch(fetchTweet(tweetId));
    }

    return () => {
      dispatch(setTweet(undefined));
    };
  }, [dispatch, tweetId]);

  if (isLoading || !tweet) {
    return (
      <div className={classes.tweetsCentred}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <Tweet classes={classes} {...tweet} />
    </div>
  );
};
