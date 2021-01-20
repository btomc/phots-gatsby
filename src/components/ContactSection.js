import React from 'react'
import styled from 'styled-components'
import contactBg from '../images/background-3.jpg'
import { Button } from './Button'

const ContactSection = () => {
    return (
        <ContactContainer>
            <ContactBg><ImgBg src={contactBg} alt='wedding on the beach' /></ContactBg>
            <ContactContent>
                <ContactH2>Contact Us</ContactH2>
                <ContactP>
                    <p>Contact us to ask any questions</p>
                    <p>We will get back to you as soon as possible</p>
                </ContactP>
                <ContactForm>
                    <form action="#">
                        <FormWrap>
                            <input type="text" id="name" name="name" placeholder="Enter your name..." required />
                            <input type="email" id="email" name="email" placeholder="Enter your email..." required />
                            <textarea name="message" placeholder="Message..." ></textarea>
                            <Button as='button' type='submit' primary='true'>Send</Button>
                        </FormWrap>
                    </form>
                </ContactForm>
            </ContactContent>
        </ContactContainer>
    )
}

export default ContactSection


const ContactContainer = styled.div`
    background: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 780px;
    position: relative;
`;

const ContactBg = styled.div`
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
    opacity: 0.35;
    -o-object-fit: cover;
    object-fit: cover;
`;

const ContactContent = styled.div`
    z-index: 3;
    color: #04294d;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 610px) {
        width: 100%;
    }
`;

const ContactH2 = styled.div`
    font-size: 2.5rem;
    margin-bottom: 1.7rem;

`;

const ContactP = styled.div`
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 538px) {
        font-size: 1.2rem;
    }
`;

const ContactForm = styled.div`
    background: #04294d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 580px;
    min-height: 480px;
    border-radius: 3px;
    opacity: 0.85;

    @media screen and (max-width: 610px) {
        width: 100%;
    }

    input,
    textarea {
        padding: 14px 32px 14px 16px;
        border-radius: 6px;
        outline: none;
        width: 480px;
        color: #04294d;
        margin-bottom: 1.5rem;
        border: none;
        font-family: inherit;

        @media screen and (max-width: 538px) {
            width: 100%;
        }
    }

    textarea {
        resize: none;
        height: 180px;
    }

    form {
        @media screen and (max-width: 538px) {
            width: 90%;
        }
    }
`;

const FormWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

