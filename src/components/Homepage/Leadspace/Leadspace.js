import { Icon } from '@iconify/react';
import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Leadspace.styles';
import { StaticImage } from 'gatsby-plugin-image';
import WaveSVG from '../../../static/assets/wave.svg';
import { SOCIAL_ICONS } from '../../../../data/templateMeta';

const Leadspace = () => {
    const classes = createUseStyles(styles)(),
        renderSocials = () => {
            return (
                <>
                    {SOCIAL_ICONS.map(icon => {
                        return <Icon key={icon} icon={icon} width={40} />
                    })}
                </>
            )
        };

    return (
        <Box component='div'>
            <Grid container className={classes.section1} columns={{ xs: 12 }}>
                <Grid className={classes.column1} item xs={6}>
                    <Typography variant='h2'>Sammone Hartfield</Typography>
                    <Typography variant='h4' gutterBottom>(Career Title)</Typography>
                    <div className={classes.socialWrapper}>{renderSocials()}</div>
                </Grid>
                <Grid className={classes.column2} item xs={6}>
                    <StaticImage src='../../../static/assets/sammone-main.jpg' alt='Sammone' />
                </Grid>
            </Grid>
            <WaveSVG className={classes.waveSvg} />
            {/* <div className={classes.root}>
                <div className={classes.heroTextWrapper} container>
                    <Typography variant='h4' component='p'>Stephen Wells</Typography>
                    <hr className={classes.heroTextDivider} />
                    <Typography variant='h6' component='p'>Front End Web Development • UI/UX Design • Prototyping</Typography>
                </div>
            </div> */}
        </Box >
    );
};

export default Leadspace;
