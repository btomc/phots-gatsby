import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { RiCameraLensFill } from 'react-icons/ri'
import styled from 'styled-components'


const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo>
                        <SocialLogoIcon />
                        phots
                    </SocialLogo>
                    <WebsiteRights>phots &copy; {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//www.facebook.com/" target='_blank' aria-label='Facebbok'><FaFacebook/></SocialIconLink>
                        <SocialIconLink href="//www.instagram.com/?hl=en" target='_blank' aria-label='Facebbok'><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="//www.linkedin.com/" target='_blank' aria-label='Linkedin'><FaLinkedin/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>           
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    background-color: #04294d;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SocialMedia = styled.div`
    max-width: 1000px;
    width: 100%;
`;

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 20px auto;

    @media screen and (max-width: 520px) {
        flex-direction: column-reverse;
    }
`;

const SocialLogo = styled.div`
    color: #fff;
    text-decoration: none;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 520px) {
        display: none;
    }
`;

const SocialLogoIcon = styled(RiCameraLensFill)`
    margin-right: 6px;
`;

const WebsiteRights = styled.p`
    color: #fff;

    @media screen and (max-width: 520px) {
        margin-bottom: .5rem;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;   

    @media screen and (max-width: 520px) {
        margin-bottom: 1.5rem;
        margin-left: 1.5rem;
    } 
`;

const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    margin-right: 1.5rem;
    transition: color .5s;

    &:hover {
        color: #42d6ff;
    }

    @media screen and (max-width: 520px) {
        margin-bottom: 0;
    } 
`;




