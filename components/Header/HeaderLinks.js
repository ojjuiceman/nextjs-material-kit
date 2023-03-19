/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import GitHubIcon from '@mui/icons-material/GitHub';

// @material-ui/icons
import { Apps, CloudDownload, GitHub, Twitter } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
     
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
     
          <Button
            href="https://twitter.com/ImJustBoolean"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <Twitter i className={classes.socialIcons + " fab fa-twitter"}>

            </Twitter>
            
           
          </Button>
       
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent"
            href="https://github.com/ojjuiceman"
            target="_blank"
            className={classes.navLink}>
        
        <GitHub i className={classes.socialIcons + " fab fa-github"}>

        </GitHub>
        
      
          
        </Button>
      </ListItem>
     
    </List>
  );
}
