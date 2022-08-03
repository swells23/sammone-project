import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { DefaultTemplate } from '../components/layout';
import { ContentBand, Leadspace } from '../components/Homepage';
import { Button, ImageList, ImageListItem } from '@material-ui/core'
import { createUseStyles } from 'react-jss';

function Homepage({ location, data }) {
  const styles = {
    root: {
      backgroundColor: '#343a40',
      padding: '8rem 12rem'
    },
    imageList: {
    },
    contactButton: {
      backgroundColor: '#a83b61 !important',
      fontSize: '1.25rem !important',
      padding: '1rem 1rem !important',
      marginTop: '2rem !important',
      marginBottom: '2rem !important',
      '&:hover' : {
        backgroundColor: '#873250 !important'
      }
    },
    mainBand1: {
      display: 'flex'
    },
    band: {
      width: '70%',
      marginRight: '8rem'
    }
  },
    classes = createUseStyles(styles)();
  const mainBand1 = () => {
    return <div className={classes.mainBand1}><div className={classes.band}>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><Button className={classes.contactButton} variant='contained'>get in touch</Button></div>
  },
    mainBand2 = () => {
      return 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    sideBand2 = () => {
      return 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };

  const imageList = data.allFile.edges;

  return (
    <DefaultTemplate headTitle='Home' location={location}>
      <Leadspace />
      {console.log('DATATEST: ', imageList)}
      <ContentBand style={{ marginTop: '-5rem' }} orientation='center' mainContent={mainBand1} gradientIn />
      <div className={classes.root}>
        <ImageList cols={3} gap={8} rowHeight='auto' className={classes.imageList}>

          {imageList.map((item) => {
            return (
              <ImageListItem key={item.node.name}>
                <GatsbyImage
                  image={getImage(item.node)}
                  alt=''
                />
              </ImageListItem>
            )
          })}
        </ImageList>
      </div>
      <ContentBand mainContent={mainBand2} sideContent={sideBand2} gradientOut />
    </DefaultTemplate >
  );
}

export default Homepage;
export const pageQuery = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "baskets"}}) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.5, quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
