import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { DefaultTemplate } from '../components/layout';
import { ContentBand, Leadspace } from '../components/Homepage';

function Homepage({ location, data }) {
  const mainBand1 = () => {
    return 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
    mainBand2 = () => {
      return 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    sideBand2 = () => {
      return 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };

  return (
    <DefaultTemplate headTitle='Home' location={location}>
      <Leadspace />
      <ContentBand orientation='center' mainContent={mainBand1} gradientIn />
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>

        {/* {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))} */}
      </ImageList>
      <ContentBand mainContent={mainBand2} sideContent={sideBand2} gradientOut />
    </DefaultTemplate>
  );
}

export default Homepage;
export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "homepage-background.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
