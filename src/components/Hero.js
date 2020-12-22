import React from 'react'
import styled from 'styled-components'
import bg from '../images/background-1.jpg'
import { Button } from './Button'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg><img src={bg} alt='photographer' /></HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Unforgettable moments</HeroH1>
                    <HeroP>preserved forever</HeroP>
                    <Button primary='true' big='true' to='/services'>See more</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
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

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
        object-fit: cover;
    }
`;

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0 calc((100vw - 1300px) / 2);
`;

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #f2f2f2;
    line-height: 1.1;
    font-weight: 800;
`;

const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 3.7rem);
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
    padding: 0 1rem;
`;

const HeroP = styled.p`
    font-size: clamp(1.5rem, 3vw, 3rem);
    margin-bottom: 2rem;
    font-weight: 600;
`;


