import React from "react";
// import { Link } from "react-router-dom";
import {
  HeaderSection,
  MainMenuNav,
  BrandLogo,
  LogoImage,
  List,
  Anchor,
  // AnchorLang,
  BtnMobile,
} from "./style.js";

const HeaderApp = () => {
  return (
    <HeaderSection>
      <div className="container">
        <MainMenuNav>
          <BrandLogo>
            <LogoImage src="/imgs/logos/logo-white.png" alt="images" />
            <LogoImage sticky src="/imgs/logos/logo.png" alt="images" />
          </BrandLogo>
          <div className="menu-tabs ml-auto">
            <ul className="d-flex mobile_menu">
              <List className="active">
                <Anchor to="/">Home</Anchor>
              </List>
              <List>
                <Anchor to="/gallery">Gallery</Anchor>
              </List>
              <List>
                <Anchor to="/">Our Team &amp; Testimonials</Anchor>
              </List>
              <List>
                <Anchor to="/blogs">Blog</Anchor>
              </List>
              <List>
                <Anchor to="/">Contact Us</Anchor>
              </List>
            </ul>
          </div>
          <div className="langs ml-auto">
            {/* <AnchorLang to="/">
              <i className="far fa-flag"></i> AR
            </AnchorLang> */}
            <BtnMobile>
              <i className="fas fa-bars"></i>
            </BtnMobile>
          </div>
        </MainMenuNav>
      </div>
    </HeaderSection>
  );
};

export default HeaderApp;
