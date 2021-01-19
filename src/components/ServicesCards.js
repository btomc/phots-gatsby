import React from 'react'
import styled from 'styled-components'
import cardImg1 from '../images/card-1.jpg'
import cardImg2 from '../images/card-2.jpg'
import cardImg3 from '../images/card-3.jpg'

const ServicesCards = () => {
    return (
        <>
            <CardsWrapper>
                <Card>
                    <CardPicture><ImgCard src={cardImg1} alt='wedding cake' /></CardPicture>
                    <CardHeading>
                        <CardSpan>Events</CardSpan>
                    </CardHeading>
                    <CardDetails>
                        <DetailsList>
                            <DetailsItem>Weddings</DetailsItem>
                            <DetailsItem>Baby Showers</DetailsItem>
                            <DetailsItem>Birthdays</DetailsItem>
                        </DetailsList>
                    </CardDetails>
                </Card>

                <Card>
                    <CardPicture><ImgCard src={cardImg2} alt='smiling girls' /></CardPicture>
                    <CardHeading>
                        <CardSpan>Sessions</CardSpan>
                    </CardHeading>
                    <CardDetails>
                        <DetailsList>
                            <DetailsItem>Portraits</DetailsItem>
                            <DetailsItem>Family Photos</DetailsItem>
                            <DetailsItem>Photo Shoots</DetailsItem>
                        </DetailsList>
                    </CardDetails>
                </Card>

                <Card>
                    <CardPicture><ImgCard src={cardImg3} alt='pancakes' /></CardPicture>
                    <CardHeading>
                        <CardSpan>Art</CardSpan>
                    </CardHeading>
                    <CardDetails>
                        <DetailsList>
                            <DetailsItem>Food Photos</DetailsItem>
                            <DetailsItem>Landscapes</DetailsItem>
                            <DetailsItem>Artistic Photos</DetailsItem>
                        </DetailsList>
                    </CardDetails>
                </Card>

            </CardsWrapper>
        </>
    )
}

export default ServicesCards

const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3.5rem 1rem;
    background-color: #f7f7f7;

    @media screen and (max-width: 910px) {
        flex-direction: column;
    }
`;

const Card = styled.div`
    background-color: #fff;
    margin: 0 1.5rem;
    height: 520px;
    width: 360px;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0, .15);
    position: relative;

    transition: all .4s;

    &:hover {
        transform: translateY(-5px) scale(1.01);
    }

    @media screen and (max-width: 910px) {
        margin-bottom: 3rem;
    }

    @media screen and (max-width: 400px) {
        &:hover {
            transform: none;
        }
    }
`;

const CardPicture = styled.div`
    background-size: cover;
    height: 17rem; 
`;

const ImgCard = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;`;

const CardHeading = styled.h4`
    font-size: 2.1rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: #fff;
    position: absolute;
    top: 13rem;
    right: 2rem;
    width: 75%;
`;

const CardSpan = styled.span`
    padding: .3rem .7rem;
    background: #04294d;
`;

const CardDetails = styled.div`
    padding-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DetailsList = styled.div`
    width: 80%;
`;

const DetailsItem = styled.div`
    font-size: 1.3rem;
    text-align: center;
    padding: .8rem;
`;

