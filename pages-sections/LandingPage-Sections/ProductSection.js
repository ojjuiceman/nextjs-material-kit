import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import WebIcon from '@material-ui/icons/Web';
import ContactlessIcon from '@material-ui/icons/Contactless';

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            Product and package information here
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6}>
            <InfoArea
              title="Website Development"
              description="Get a website developed for your business. Creating a design and user experience that accompolishes your marketing goals."
              icon={WebIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={6}>
            <InfoArea
              title="Digital Marketing"
              description="Connect with your target audience and gain more customers. Marketing services for social media, SEO and copywriting."
              icon={ContactlessIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
