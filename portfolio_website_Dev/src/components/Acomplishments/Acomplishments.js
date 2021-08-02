import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: "Projetos de código aberto" },
  { number: 40, text: "Repositórios criados" },
  { number: 90, text: "Seguidores no Github" },
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
