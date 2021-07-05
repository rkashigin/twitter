import React from "react";
import {
  Container,
  createStyles,
  withStyles,
  Grid,
  makeStyles,
  Paper,
  InputBase,
  Typography,
  InputAdornment
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import grey from '@material-ui/core/colors/grey';
import Tweet from "../components/Tweet";
import SideMenu from "../components/SideMenu";

export const useHomeStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100vh'
  },
  logo: {
    margin: '10px 0'
  },
  logoIcon: {
    fontSize: 36
  },
  sideMenuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: 230
  },
  sideMenuListItem: {
    cursor: 'pointer',

    '&:hover': {
      '& div': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& h6': {
          color: theme.palette.primary.main
        },
        '& svg path': {
          fill: theme.palette.primary.main
        }
      }
    },
    '& div': {
      display: "inline-flex",
      alignItems: "center",
      position: 'relative',
      left: -10,
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: 'background-color 0.1s ease-in-out'
    }
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 18,
    marginLeft: 10
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2)
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0
  },
  tweetsHeader: {
    borderRadius: 0,
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    padding: '10px 15px',

    '& h6': {
      fontWeight: 800
    }
  },
  tweet: {
    cursor: 'pointer',
    paddingTop: 15,
    paddingLeft: 20 ,

    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)'
    }
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  tweetFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    left: -13,
    width: '80%',
    maxWidth: 450
  },
  tweetFooterIcon: {
    fontSize: 20
  },
  tweetUserName: {
    color: grey[500]
  },
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      height: 45,
    },
  })
)(InputBase);

export const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Home</Typography>
            </Paper>
            {
              [...new Array(20).fill(
                <Tweet
                  classes={classes}
                  user={
                    {
                      fullname: 'Roman Kashigin',
                      username: 'r.kashigin',
                      avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
                    }
                  }
                  text={
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nostrum sequi velit voluptate? Alias, asperiores aspernatur dolor dolore dolorem doloribus eaque eveniet exercitationem explicabo iure magnam minima, non provident, tempore.'
                  }
                />
              )]
            }
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField
            fullWidth
            placeholder="Search Twitter"
            startAdornment={
              (<InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>)
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};
