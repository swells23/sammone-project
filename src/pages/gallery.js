import React from 'react';
import { DefaultTemplate } from '../components/layout';

function Gallery(props) {
  const { location } = props;

  return <DefaultTemplate headTitle='Gallery' location={location} />;
}

export default Gallery;
