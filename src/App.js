import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Header,
  Home,
  Contact,
  AboutMe,
  Languages,
  Services,
  WorkExperience,
  Education,
  TechnicalSkills,
  GraphicSkills,
  GraduationProject,
  WebProjects,
  AIProjects,
  Tutorials,
  Activities,
  GlobalCompetitions,
  Clubs,
  CommunityWork,
  Footer,
} from "./Sections/index";

import { Cursor } from "./Components/index";


const App = () => {
  return (
    <>
      <Router basename="/my-cv">
        {/* <Cursor /> */}

        <Header />
        <Home />

        <Contact />
        <AboutMe />
        {/*
      <Languages />
      <Services />
      <WorkExperience />
      <Education />
      <TechnicalSkills />
      <GraphicSkills />
      <GraduationProject />
      <WebProjects />
      <AIProjects />
      <Tutorials />
      <Activities />
      <GlobalCompetitions />
      <Clubs />
      <CommunityWork />
      <Footer /> */}

       
      </Router>
    </>
  );
};

export default App;
