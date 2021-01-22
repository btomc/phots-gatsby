import React, {useState, useRef, useEffect} from 'react'
import styled, { css } from 'styled-components'
import testimonialsBg from '../images/background-7.jpg'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'

const Testimonials = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 5000)

        return function() {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }


    return (
        <TestimonialsContainer>
            <TestimonialsBg><ImgBg src={testimonialsBg} alt='bridge at sea' /></TestimonialsBg>
            <TestimonialsContent>
                <TestimonialsH2>What People are Saying</TestimonialsH2>
                <TestimonialsWrap>
                    {slides.map((slide, index) => {
                        return (
                            <Opinion key={index}>
                                {index === current && (
                                <OpinionWrapper>
                                    <OpinionPic><ImgOpinion src={slide.image} alt={slide.alt} /></OpinionPic>
                                    <OpinionWrap>
                                        <OpinionText>{slide.opinion}</OpinionText>
                                        <OpinionAuthor>
                                            <AuthorName>{slide.name}</AuthorName>
                                            <AuthorLocation>{slide.location}</AuthorLocation>
                                        </OpinionAuthor>
                                    </OpinionWrap>
                                </OpinionWrapper>
                                )}
                            </Opinion>
                        )
                    })}
                </TestimonialsWrap>
                <SliderBtns>
                    <PrevArrow onClick={prevSlide} /> 
                    <NextArrow onClick={nextSlide} /> 
                </SliderBtns>
            </TestimonialsContent>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 640px;
    position: relative;
    overflow: hidden;
`;

const TestimonialsBg = styled.div`
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
    opacity: 0.3;
    -o-object-fit: cover;
    object-fit: cover;
`;

const TestimonialsContent = styled.div`
    z-index: 3;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    overflow: hidden;
`;

const TestimonialsH2 = styled.div`
    color: #04294d;
    text-transform: uppercase;
    font-size: 2.5rem;
    letter-spacing: 1px;
    
    @media screen and (max-width: 862px) {
        font-size: 2rem;
        padding: 1.2rem;
    }

    @media screen and (max-width: 528px) {
        font-size: 1.6rem;
    }

    @media screen and (max-width: 437px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width: 370px) {
        font-size: 1.1rem;
    }

`;

const TestimonialsWrap = styled.div`
    background: rgba(255,255,255, .6);
    border-radius: 3px;
    width: 60%;
    height: 300px;
    max-height: 500px;
    z-index: 10;
    margin-bottom: 2.4rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0, .15);

    @media screen and (max-width: 862px) {
        height: 65%;
        margin-bottom: 0;
    }

    @media screen and (max-width: 570px) {
        width: 90%;
    }
`;

const Opinion = styled.div``;

const OpinionWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;   
    padding-top: 3rem;
    z-index: 14;
    overflow: hidden;
    position: relative; 

    @media screen and (max-width: 999px) {
        padding-top: 2rem;   
    }

    @media screen and (max-width: 862px) {
        flex-direction: column;
        align-items: center;
    }
`;


const OpinionPic = styled.div`
    height: 5.2rem;
    width: 5rem;
    margin-right: 2rem;
    

    @media screen and (max-width: 862px) {
      margin-bottom: 1.5rem;
      margin-right: 0;
    }
    
`;
const ImgOpinion = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

const OpinionWrap = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    position: relative;

    @media screen and (max-width: 862px) {
        width: 80%;
    }
`;

const OpinionText = styled.p`
    line-height: 1.4;
    margin-bottom: 1rem;

    @media screen and (max-width: 999px) {
        font-size: .9rem;  
        line-height: 1.6;
    }
`;

const OpinionAuthor = styled.div``;

const AuthorName = styled.p`
    font-weight: 600;
    margin-bottom: 6px;
    font-size: 1.1rem;
`;

const AuthorLocation = styled.p`
    font-size: 14px;
`;

const SliderBtns = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;

    @media screen and (max-width: 999px) {
        bottom: 0;
        right: 0;
        position: relative;
        padding-bottom: 1.2rem;
    }
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #04294d;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: .3s;

    &:hover {
        background: #073e75;
        transform: scale(1.05);
    }
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}

    @media screen and (max-width: 862px) {
        margin-right: 0;
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;
