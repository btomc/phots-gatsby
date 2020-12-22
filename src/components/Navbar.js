import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { RiCameraLensFill } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib'
import { Link } from 'gatsby'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: '#f2f2f2'}}>
                <Nav active={scroll} click={click}>
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
    background: ${({active}) => active ? '#181d61' : 'transparent'};
    /* background: #181d61; */
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px) {
        background: ${({ click }) => (click ? '#181d61' : 'transparent')};
        transition: 0.8s all ease;
    }
`;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1000px;
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
`;

const NavIcon = styled(RiCameraLensFill)`
    margin: 0 0.5rem 0 2rem;
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

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: ${({ click }) => (click ? '100%' : '-1000px')};
        opacity: 1;
        transition: all 0.2s ease;
        background: #181d61;
    }
`;

const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 960px) {
        padding: 3rem;
    }
`;

const NavLink = styled(Link)`
    color: #f2f2f2;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    height: 100%;
    font-size: 1.3rem;

    &:hover {
        color: #42d6ff;
        transition: all 0.3s ease;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        font-size: 1.8rem;
    }
`;


