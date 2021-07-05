import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import MessageIcon from "@material-ui/icons/ModeCommentOutlined";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import ModalBlock from "../components/ModalBlock";

export const useStylesSignIn = makeStyles((theme) => ({
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
  loginSideField: {
    marginBottom: 18
  },
  signupSideField: {
    marginBottom: theme.spacing(5)
  },
  loginFormControl: {
    marginBottom: theme.spacing(2)
  }
}));

export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = React.useState<"signIn" | "signUp">();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal("signIn");
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal("signUp");
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

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
            onClick={handleClickOpenSignUp}
          >
            Sign up
          </Button>
          <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>
            Sign in
          </Button>
          <ModalBlock title="Create new account" visible={visibleModal === "signUp"} onClose={handleCloseModal}>
            <FormControl component="fieldset" fullWidth className={classes.loginFormControl}>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.signupSideField}
                  autoFocus
                  id="name"
                  label="Name"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={classes.signupSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.signupSideField}
                  autoFocus
                  id="email"
                  label="Password"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                  Next
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          <ModalBlock title="Enter Twitter" visible={visibleModal === "signIn"} onClose={handleCloseModal}>
            <FormControl component="fieldset" fullWidth className={classes.loginFormControl}>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="Password"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                  Log In
                </Button>
                <br/>
                <br/>
                <br/>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
