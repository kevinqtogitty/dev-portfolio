import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import MainSection from '../site_sections/MainSection';
import AboutSection from '../site_sections/AboutSection';
import ContactSection from '../site_sections/ContactSection';
import ProjectsSection from '../site_sections/ProjectsSection';

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
