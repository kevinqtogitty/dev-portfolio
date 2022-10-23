import React, { useState } from 'react';
import { AnimatedLink, NavBar } from '../styles/stitches/navigation_styles';
import { useSpring } from 'react-spring';
import {
  MenuItemContainer,
  MenuItemText,
  FrostedGlass,
} from '../styles/stitches/frostedGlass_styles';

const NavigationBar: React.FC = (): JSX.Element => {
  const [menuIsClicked, setMenuIsClicked] = useState<boolean>(true);

  const projectsAnimation = useSpring({
    opacity: menuIsClicked ? 1 : 1,
    transform: menuIsClicked ? `translate(20%, -150%)` : 'translate(0%, 0%)',
  });

  const aboutAnimation = useSpring({
    opacity: menuIsClicked ? 1 : 1,
    transform: menuIsClicked ? `translate(-110%, -100%)` : 'translate(0%, 0%)',
    delay: menuIsClicked ? 100 : 0,
  });

  const contactAnimation = useSpring({
    opacity: menuIsClicked ? 1 : 1,
    transform: menuIsClicked ? `translate(-150%, 30%)` : 'translate(0%, 0%)',
    delay: menuIsClicked ? 200 : 0,
  });

  return (
    <NavBar>
      <MenuItemContainer
        variant="main"
        onClick={() => setMenuIsClicked(!menuIsClicked)}
      >
        <MenuItemText>Menu</MenuItemText>
        <FrostedGlass variant="menuOrb" />
      </MenuItemContainer>
      <MenuItemContainer variant="subMenuItem" style={projectsAnimation}>
        <AnimatedLink
          to="Page2"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => setMenuIsClicked(!menuIsClicked)}
        >
          <MenuItemText>About</MenuItemText>
          <FrostedGlass variant="aboutOrb" />
        </AnimatedLink>
      </MenuItemContainer>{' '}
      <MenuItemContainer variant="subMenuItem" style={aboutAnimation}>
        <AnimatedLink
          to="Page3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => setMenuIsClicked(!menuIsClicked)}
        >
          <MenuItemText>Projects</MenuItemText>
          <FrostedGlass variant="projectsOrb" className="projects" />
        </AnimatedLink>
      </MenuItemContainer>{' '}
      <MenuItemContainer variant="subMenuItem" style={contactAnimation}>
        <AnimatedLink
          to="Page4"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => setMenuIsClicked(!menuIsClicked)}
        >
          <MenuItemText>Contact</MenuItemText>
          <FrostedGlass variant="contactOrb" />
        </AnimatedLink>
      </MenuItemContainer>
    </NavBar>
  );
};

export default NavigationBar;
