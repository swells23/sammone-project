import { Typography } from '@material-ui/core';
import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Leadspace.styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MAIN_IMAGES } from '../../../../data/templateMeta';

const Leadspace = ({ data }) => {
    const classes = createUseStyles(styles)(),
        heroImg = getImage(data.file);

    return (
        <div className={classes.root}>
            <GatsbyImage className={classes.heroImg} image={heroImg} alt={MAIN_IMAGES.hero.alt} objectFit='fill' />
            <div container className={classes.heroTextWrapper}>
                <Typography variant='h4' component='p'>Stephen Wells</Typography>
                <hr className={classes.heroTextDivider} />
                <Typography variant='h6' component='p'>Front End Web Development • UI/UX Design • Prototyping</Typography>
            </div>
        </div>
    );
};

export default Leadspace;
