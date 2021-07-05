import React from 'react';
import {Button, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MessageIcon from "@material-ui/icons/MailOutline";
import BookmarkIcon from "@material-ui/icons/BookmarkBorder";
import ListIcon from "@material-ui/icons/ListAlt";
import UserIcon from "@material-ui/icons/PersonOutline";
import {useHomeStyles} from "../pages/Home";

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
};

const SideMenu: React.FC<SideMenuProps> = ({ classes }): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton aria-label="twitter" color="primary">
          <TwitterIcon className={classes.logoIcon} />
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомления</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщения</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">Профиль</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.sideMenuTweetButton}
        >
          Tweet
        </Button>
      </li>
    </ul>
  );
};

export default SideMenu;
