import { Box, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './ContentBand.styles';
// import { StaticImage } from 'gatsby-plugin-image';
// import WaveSVG from '../../../static/assets/wave.svg';

const ContentBand = ({ orientation, mainContent, sideContent, gradientIn, gradientOut }) => {
    const classes = createUseStyles(styles)({ gradientIn, gradientOut }),
        renderBand = () => {
            if (orientation === 'center') {
                return (
                    <Grid className={classes.fullSection}>
                        {mainContent && <Typography variant='h4'>{mainContent()}</Typography>}
                    </Grid>
                )
            } else {
                const direction = orientation === 'reverse' ? 'row-reverse' : 'row';

                return (
                    <Grid container direction={direction} className={classes.splitSection} columns={{ xs: 12 }}>
                        <Grid className={classes.column1} item xs={6}>
                            {mainContent && <Typography variant='h4'>{mainContent()}</Typography>}
                        </Grid>
                        <Grid className={classes.column2} item xs={6}>
                            {sideContent && <Typography variant='h4'>{sideContent()}</Typography>}
                        </Grid>
                    </Grid>
                )
            }
        }

    return (
        <Box component='div' className={classes.root}>
            {renderBand()}
        </Box>
    );
};

ContentBand.defaultProps = {
    orientation: ''
};

ContentBand.propTypes = {
    mainContent: PropTypes.func,
    sideContent: PropTypes.func,
    orientation: PropTypes.string
};

export default ContentBand;
