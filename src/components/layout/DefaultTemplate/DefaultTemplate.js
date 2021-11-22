import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { createUseStyles } from 'react-jss';
import styles from './DefaultTemplate.styles';
import { GlobalNav } from '../../pattern';

const DefaultTemplate = ({ children, headTitle, location }) => {
  const classes = createUseStyles(styles)();

  return (
    <>
      <Helmet>
        <title>{`${headTitle} | swells23's Portfolio`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Helmet>
      <div>
        <GlobalNav location={location} />
        <div className={classes.root}>{children}</div>
      </div>
    </>
  );
};

DefaultTemplate.defaultProps = {
  headTitle: ''
};

DefaultTemplate.propTypes = {
  headTitle: PropTypes.string
};

export default DefaultTemplate;
