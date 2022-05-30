import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const Wrapper = styled.a`
  position: relative;
  display: block;

  // For the slide effect
  overflow: hidden;

  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  transition: transform 0.2s ease-in-out;

  &::before {
    display: inline-block;
    position: absolute;
    top: 0;
    content: ""
    height: 100%;
  }

  &:first-of-type {
    color: var(--color-secondary);
  }

  &:before :hover {
    transform: translateY(-100%);
    transition: transform 0.2s ease-in-out;

  }
`

const Text = styled.span`
  display: block;

  // Prevent text from being cut off when it turns bold on hover.
  padding: 1px;

  // Use CSS variables to customize the positioning while reusing the animation
  transform: translateY(var(--translate-from));
  transition: transform 0.2s;
  
  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(var(--translate-to));
      transition: transform 0.2s;
    }
}
`

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
  
  `
const HoverText = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;
  
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

`


const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </Wrapper>
  );
};


export default NavLink;