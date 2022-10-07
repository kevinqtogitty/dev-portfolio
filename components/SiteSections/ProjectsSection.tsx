import React from 'react';

import { SiteSection } from '../../styles/stitches/SiteSection_styles';
import PhotographyProject from '../individual_projects/PhotographyProject';
import ReelTalk from '../individual_projects/ReelTalk';
import WhatsPlaying from '../individual_projects/WhatsPlaying';

const ProjectsSection = () => {
  return (
    <SiteSection id="Page3" variant="ProjectSection">
      <PhotographyProject />
      <WhatsPlaying />
      <ReelTalk />
    </SiteSection>
  );
};

export default ProjectsSection;
