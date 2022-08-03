import { Icon } from '@iconify/react';
import { Box, Grid, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Leadspace.styles';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
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
        },
        renderCarousel = () => { // Debug: Temp hardcoding due to dynamic rendering issue
            return (
                <Carousel interval={7000} duration={0} indicatorIconButtonProps={{
                    style: {
                        color: '#343a40'
                    }
                }} activeIndicatorIconButtonProps={{
                    style: {
                        color: '#a83b61'
                    }
                }}>
                    <StaticImage src='../../../static/assets/people/sammone-main.jpg' key='people-1' alt='test' layout='fullWidth'  />
                    <StaticImage src='../../../static/assets/people/people-1.jpg' key='people-1' alt='test' layout='fullWidth' />
                    <StaticImage src='../../../static/assets/people/people-2.jpg' key='people-2' alt='test' layout='fullWidth' />
                    <StaticImage src='../../../static/assets/people/people-3.jpg' key='people-3' alt='test' layout='fullWidth' />
                    <StaticImage src='../../../static/assets/people/people-4.jpg' key='people-4' alt='test' layout='fullWidth' />
                    <StaticImage src='../../../static/assets/people/people-5.jpg' key='people-5' alt='test' layout='fullWidth' />
                    <StaticImage src='../../../static/assets/people/people-6.jpg' key='people-6' alt='test' layout='fullWidth' />
                    <StaticImage src='../../../static/assets/people/people-7.jpg' key='people-7' alt='test' layout='fullWidth' />
                </Carousel>
            )
        }

    return (
        <Box component='div'>
            <Grid container className={classes.section1} columns={{ xs: 12 }}>
                <Grid className={classes.column1} item xs={6}>
                    <Typography variant='h2'>Hartfield Gifts</Typography>
                    <Typography variant='h4' gutterBottom>(Career Title)</Typography>
                    <div className={classes.socialWrapper}>{renderSocials()}</div>
                </Grid>
                <Grid className={classes.column2} item xs={6}>
                    {/* <StaticImage src='../../../static/assets/sammone-main.jpg' alt='Sammone' /> */}
                    {renderCarousel()}
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
