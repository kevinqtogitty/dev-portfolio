import React from 'react';

import { SiteSection } from '../../styles/stitches/SiteSection_styles';
import AnnounceItProject from '../individual_projects/AnnounceItProject';
import PhotographyProject from '../individual_projects/PhotographyProject';
import ReelTalk from '../individual_projects/ReelTalk';
import WhatsPlaying from '../individual_projects/WhatsPlaying';

const ProjectsSection: React.FC = (): JSX.Element => {
  return (
    <SiteSection id="Page3" variant="ProjectSection">
      <AnnounceItProject />
      <PhotographyProject />
      <WhatsPlaying />
      <ReelTalk />
    </SiteSection>
  );
};

export default ProjectsSection;
