import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
border: 5px solid black;
align-content: center;
align-items: center;
justify-content: center;
justify-items: center;
height: 6rem;
width: 60rem;
`;

const Text = styled.h1`
color: green;
font-size: 2rem;
text-align: center;
vertical-align: middle;
`;


const Header = () => (
  <div>
    <Section>
      <Text>Welcome to RESTY!</Text>
    </Section>
  </div>
);

export default Header;
