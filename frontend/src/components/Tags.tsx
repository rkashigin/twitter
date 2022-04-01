import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { useHomeStyles } from "../pages/Home/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsTagsLoaded,
  selectTagsItems,
} from "../store/ducks/tags/selectors";
import { fetchTags } from "../store/ducks/tags/actionCreators";

interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const Tags: React.FC<TagsProps> = ({ classes }): React.ReactElement | null => {
  const dispatch = useDispatch();
  const items = useSelector(selectTagsItems);
  const isLoaded = useSelector(selectIsTagsLoaded);

  React.useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  if (!isLoaded) {
    return null;
  }

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader}>
        <b>Trends for you</b>
      </Paper>
      <List>
        {items.map((item) => (
          <React.Fragment key={item._id}>
            <ListItem className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${item.name}`}>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <Typography component="span" variant="body2">
                      Tweets: {item.count}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default Tags;
