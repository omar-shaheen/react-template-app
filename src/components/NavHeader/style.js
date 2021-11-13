import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderSection = styled.header`
    transition: 1s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
`

// header.sticky-header {
//     transform: translateY(-100%);
// }

// header.bg-sticky-header {
//     background-color: #fff;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
// }


export const MainMenuNav = styled.nav`
    background-color: transparent;
    position: relative;
    transition: all 1s linear;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;
`

export const BrandLogo = styled.div`
    background-color: transparent;
`

export const LogoImage = styled.img`
    max-height: 160px;
    padding: 5px;
    transition: .5s;
    display: ${props=>props.sticky ? '' : 'none'};
`

// header.bg-sticky-header .brand-logo img {
//     display: none;
// }

// header.bg-sticky-header .brand-logo .logo-sticky {
//     display: block;
// }

export const List = styled.li`
    position: relative;
`

export const Anchor = styled(Link)`
    text-transform: uppercase;
    font-weight: 600;
    padding: 25px 10px;
    display: inline-block;
    color: #fff;
    text-transform: capitalize;
    text-decoration: none;

    &:hover,
    &.active {
        color: #999;
    }
`


// header.bg-sticky-header .menu-tabs>ul>li>a {
//     color: var(--blackColor);
// }

// header.bg-sticky-header .menu-tabs>ul>li>a:hover,
// header.bg-sticky-header .menu-tabs>ul>li.active>a {
//     color: var(--roseColor);
// }

// header.bg-sticky-header .menu-tabs ul.dropdown-menu {
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// }

// @media(max-width: 767px) {
//     .menu-tabs ul.dropdown-menu {
//         width: 100%;
//         text-align: center;
//     }
// }

export const AnchorLang = styled(Anchor)`
    color: #444;
`

// header.bg-sticky-header .langs a:hover,
// .langs a:hover {
//     color: var(--orangeColor);
// }

// header.bg-sticky-header .langs a {
//     color: var(--blackColor);
// }

export const BtnMobile = styled.button`
    display: none;
`