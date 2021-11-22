import { Box, Grid, Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { PAGELIST } from '../../../../data/templateMeta';
import styles from './GlobalNav.styles';

const GlobalNav = ({ location }) => {
  const classes = createUseStyles(styles)(),
    homepageRef = PAGELIST.find((page) => page.id === 'homepage').route,
    getMenuItems = () => {
      return PAGELIST.map((page) => {
        return (
          <li
            key={page.id}
            className={
              location.pathname === page.route ? classes.active : undefined
            }
          >
            <Link to={page.route}>
              <Typography
                variant="h6"
                component="p"
                className={classes.tempTypographyMain}
              >
                {page.title}
              </Typography>
            </Link>
          </li>
        );
      });
    };

  return (
    <Box component="header" className={classes.root}>
      <Grid container alignItems="center">
        <Link to={homepageRef}>
          <Typography
            variant="h5"
            component="p"
            className={classes.tempTypographyLogo}
          >
            swells23
          </Typography>
        </Link>
        <nav className={classes.navMenu}>
          <ul>{getMenuItems()}</ul>
        </nav>
      </Grid>
    </Box>
  );
};

GlobalNav.defaultProps = {
  location: {
    pathname: ''
  }
};

GlobalNav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default GlobalNav;
