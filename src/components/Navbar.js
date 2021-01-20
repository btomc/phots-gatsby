import React, {useState} from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { RiCameraLensFill } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib'
import { Link } from 'gatsby'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <IconContext.Provider value={{ color: '#f2f2f2'}}>
                <Nav click={click}>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon />
                            phots
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLink to='/'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/services'>Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/contact'>Contact</NavLink>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>   
        </>
    )
}

export default Navbar

const Nav = styled.div`
    background: transparent;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: relative;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px) {
        background: ${({ click }) => (click ? '#04294d' : 'transparent')};
        transition: 0.8s all ease;
    }
`;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
`;

const NavLogo = styled(Link)`
    color: #f2f2f2;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-left: 1rem;

    @media screen and (max-width: 560px) {
        margin-left: .5rem;
    }
`;

const NavIcon = styled(RiCameraLensFill)`
    margin: 0 0.5rem 0 1.4rem;
    font-size: 2.3rem;
`;

const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 72%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 1.6rem;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: ${({ click }) => (click ? '100%' : '-1000px')};
        opacity: 1;
        transition: all 0.2s ease;
        background: #04294d;
    }
`;

const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 960px) {
        padding: 2rem;
        margin: 1rem;
    }
`;

const NavLink = styled(Link)`
    color: #f2f2f2;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    height: 80px;
    font-size: 1.4rem;

    &:hover {
        color: #42d6ff;
        transition: all 0.3s ease;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        width: 100%;
        height: auto;
        padding: 1.5rem;
        display: inline-block;
        font-size: 1.8rem;
        text-transform: uppercase;
        background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #42d6ff 50%);
        background-size: 235%;
        transition: all .4s;

        &:hover {
            background-position: 100%;
            color: #04294d;
            transform: translateX(1rem);
        }
    }
`;


