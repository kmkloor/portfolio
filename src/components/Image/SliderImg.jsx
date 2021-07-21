import React from 'react'
import PropTypes from 'prop-types'
import {graphql, useStaticQuery } from 'gatsby';
import BackgroundSlider from 'gatsby-image-background-slider'
import ProjectImg from '../Image/ProjectImg'

const SliderImg = ({ filenames }) => (
  <>
  <BackgroundSlider 
    query={useStaticQuery(graphql`
      query {
        backgrounds: allFile (filter: {sourceInstanceName: {eq: "images"}}){
          nodes {
            relativePath
            childImageSharp {
              fluid (maxWidth: 1000, quality: 100){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `)}
    initDelay={2} 
    transition={4} 
    duration={4} 
     
    images={filenames} 
  />
  <ProjectImg alt={''} filename={'clear.png'} />
  </>
);  

SliderImg.propTypes = {
  filenames: PropTypes.array,
};

export default SliderImg;