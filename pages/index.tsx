import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import MainSection from '../components/SiteSections/MainSection';
import AboutSection from '../components/SiteSections/AboutSection';
import ContactSection from '../components/SiteSections/ContactSection';
import ProjectsSection from '../components/SiteSections/ProjectsSection';

import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kevin To Dev</title>
        <meta name="description" content="Kevin To developer portfolio" />
      </Head>
      <MainSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
