import { graphql } from 'gatsby';
import React from 'react';
import { DefaultTemplate } from '../components/layout';
import { Leadspace } from '../components/Homepage';

function Homepage({ location, data }) {
  return (
    <DefaultTemplate headTitle='Home' location={location}>
      <Leadspace data={data} />
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
