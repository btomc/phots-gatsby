import React from 'react'
import styled from 'styled-components'
import servicesBg from '../images/background-4.jpg'

const Heading = ({ heading }) => {
    return (
        <ServicesContainer>
            <ServicesBg><ImgBg src={servicesBg} alt='background-lights' /></ServicesBg>
            <ServicesContent>
                <ServicesH1>{heading}</ServicesH1>
            </ServicesContent>
        </ServicesContainer>
    )
}

export default Heading

const ServicesContainer = styled.div`
    background: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    color: #f2f2f2;

    :before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%),
                    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    }
`;

const ServicesBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;

const ServicesContent = styled.div`
    z-index: 3;
`;

const ServicesH1 = styled.h1`
    font-size: 4rem;
    letter-spacing: 2px;
`;

