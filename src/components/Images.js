import React from "react"
import styled from 'styled-components'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from 'gatsby'

const Images = ({ headingSmall }) => {
  const data = useStaticQuery(graphql`
  query {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["img-2", "img-3", "img-4", "img-5", "img-6", "img-7", "img-8", "img-9", "img-10", "img-11", "img-17", "img-13", "img-14", "img-15", "img-18"]}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ImagesContainer>
      <ImagesH2>{headingSmall}</ImagesH2>
      <ImagesGrid>
        {data.allFile.edges.map((image, key) => (
            <ImgWrap key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
      </ImagesGrid>
    </ImagesContainer>
  )
}

export default Images


const ImagesContainer = styled.div`
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagesH2 = styled.h2`
  color: #04294d;
  margin-bottom: 4rem;
  text-transform: uppercase;
  font-size: 2.6rem;
  letter-spacing: 1.2px;

  @media screen and (max-width: 490px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.6rem;
  }
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  padding: 0 32px;
`;

const ImgWrap = styled(Img)`
  border-radius: 3px;
`;
