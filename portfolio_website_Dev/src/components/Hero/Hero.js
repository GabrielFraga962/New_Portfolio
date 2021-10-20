import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Seja Bem-Vindo! <br />
        Este é o meu Portfólio
      </SectionTitle>
      <SectionText>
        Meu nome é Gabriel e sou um profissional Front-End Developer. Atualmente
        trabalho utilizando o framework ReactJs e Native na construção de
        aplicações dinâmicas e funcionais, tanto para Descktop quanto para
        Mobile.
      </SectionText>
      {/* Aqui terei que criar alguma outra página... */}
      <Button
        onClick={() =>
          (window.location =
            "https://gabrielfraga.notion.site/Sobre-Mim-bdb82a6b8f814264b5f54d78981ac564")
        }
      >
        Saiba mais
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;