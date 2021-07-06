import React from "react";
import classNames from "classnames";
import {
  Container,
  createStyles,
  withStyles,
  Grid,
  makeStyles,
  Paper,
  InputBase,
  Typography,
  InputAdornment,
  IconButton,
  TextField,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  Button,
  TextareaAutosize,
  CircularProgress,
  Theme
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import grey from '@material-ui/core/colors/grey';
import { Tweet } from "../components/Tweet";
import { SideMenu } from "../components/SideMenu";

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
    position: 'sticky',
    top: 0,
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
    display: 'flex',
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
  rightSide: {
    paddingTop: 20,
    position: 'sticky',
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: 'flex',
    width: '100%',
  },
  addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: '#E6ECF0',
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    },
  },
  addFormBottomRight: {
    display: 'flex',
    alignItems: 'center',
  }
}));

export const SearchTextField = withStyles((theme: Theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      padding: 0,
      paddingLeft: 15,
      '&.Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': { borderWidth: 1, borderColor: theme.palette.primary.main },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      },
      '&:hover': {
        '& fieldset': { borderColor: 'transparent' },
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1,
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px 14px 5px',
    },
  },
}))(TextField);

export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item md={3} sm={1}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item md={6} sm={8}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Home</Typography>
            </Paper>
            <Paper>
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
                  <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <IconButton color="primary">
                      <ImageOutlinedIcon style={{ fontSize: 26 }} />
                    </IconButton>
                    <IconButton color="primary">
                      <EmojiIcon style={{ fontSize: 26 }} />
                    </IconButton>
                  </div>
                  <div>
                    <span>280</span>
                    <div>
                      <CircularProgress variant="static" size={20} thickness={5} />
                      <CircularProgress
                        style={{ color: 'rgba(0, 0, 0, 0.1)' }}
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
              <div className={classes.addFormBottomLine}/>
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
                )
              }}
              fullWidth
            />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Trends for you</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Moscow"
                    secondary={
                      <Typography component="span" variant="body2">
                        Tweets: 1 488
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="#FreeNavalny"
                    secondary={
                      <Typography component="span" variant="body2">
                        Tweets: 13 488
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
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
                      <Typography component="span" variant="body2" color="textSecondary">
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
