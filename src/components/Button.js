import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#10b9e8' : '#04294d')};
    white-space: nowrap;
    color: #f2f2f2;
    font-size: 1.2rem;
    padding: ${({ big }) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.4s !important;
    border-radius: 50px;

    &:hover {
        transform: scale(1.09);
    }
`;
