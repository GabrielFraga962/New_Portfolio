import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Celular</LinkTitle>
          <LinkItem href="tel:(11)976099320">(11)976099320</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:gabrielsouzafraga@outlook.com">
            gabrielsouzafraga@outlook.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>A maior força que existe é a personalidade</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/GabrielFraga962">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/gabriel-s-976256110/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
