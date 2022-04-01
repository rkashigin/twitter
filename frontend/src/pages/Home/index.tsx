import React from "react";
import { Route } from "react-router-dom";
import {
  Container,
  Grid,
  Paper,
  Typography,
  InputAdornment,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  Button,
  CircularProgress,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import { useDispatch, useSelector } from "react-redux";

import { Tweet } from "../../components/Tweet";
import { SideMenu } from "../../components/SideMenu";
import { AddTweetForm } from "../../components/AddTweetForm";
import { SearchTextField } from "../../components/SearchTextField";
import { BackButton } from "../../components/BackButton";
import { useHomeStyles } from "./theme";
import { fetchTweets } from "../../store/ducks/tweets/actionCreators";
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "../../store/ducks/tweets/selectors";
import Tags from "../../components/Tags";
import { FullTweet } from "./components/FullTweet";
import { fetchTags } from "../../store/ducks/tags/actionCreators";

export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item md={3} sm={1}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item md={6} sm={8}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Route path="/home/:any">
                <BackButton />
              </Route>
              <Route path="/home/tweet">
                <Typography variant="h6">Post tweet</Typography>
              </Route>
              <Route path={["/home", "/home/search"]} exact>
                <Typography variant="h6">Tweets</Typography>
              </Route>
            </Paper>
            <Route path={["/home", "/home/search"]} exact>
              <Paper>
                <div className={classes.addForm}>
                  <AddTweetForm classes={classes} />
                </div>
                <div className={classes.addFormBottomLine} />
              </Paper>
            </Route>
            <Route path="/home" exact>
              {isLoading ? (
                <div className={classes.tweetsCentred}>
                  <CircularProgress />
                </div>
              ) : (
                tweets.map((tweet) => (
                  <Tweet key={tweet._id} classes={classes} {...tweet} />
                ))
              )}
            </Route>
            <Route path="/home/tweet/:id" component={FullTweet} exact />
          </Paper>
        </Grid>
        <Grid item sm={3} md={3}>
          <div className={classes.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Search Twitter"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Tags classes={classes} />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Who to follow?</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock Of Shame"
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
