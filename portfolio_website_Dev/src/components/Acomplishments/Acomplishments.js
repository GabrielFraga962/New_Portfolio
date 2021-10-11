import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 22, text: "Projetos de código aberto" },
  { number: 63, text: "Repositórios criados" },
  { number: 110, text: "Seguidores no Github" },
  { number: 20, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Realizações Pessoais</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
