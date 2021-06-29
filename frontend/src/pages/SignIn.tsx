import React from "react";
import { makeStyles, Button, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import MessageIcon from "@material-ui/icons/ModeCommentOutlined";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  blueSide: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#71C9F8",
    flex: "0 0 50%",
  },
  blueSideBigIcon: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "400%",
    height: "400%",
  },
  blueSideListInfo: {
    position: "relative",
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: 405,
    "& h6": {
      display: "flex",
      alignItems: "center",
      color: "white",
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50%",
    overflow: "hidden",
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 45,
    marginTop: 20,
  },
}));

function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Read about what you are interested in
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListInfoIcon} />
              Find out what the world is talking about
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListInfoIcon} />
              Join the conversation
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.loginSideTwitterIcon}
          />
          <Typography variant="h4" className={classes.loginSideTitle}>
            Find out what is going on in the world right now
          </Typography>
          <Typography>
            <b>Join Twitter now!</b>
          </Typography>
          <br />
          <Button
            style={{ marginBottom: 15 }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign up
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Sign in
          </Button>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
