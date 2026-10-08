"use client";
import React from 'react';
import ApiRequest from './services/page';
import TitleComponent from './components/TitleComponent'
import Description from './components/Description';
import Footer from './components/Footer';

// Página inicial
export default function Home() {
  return (
    <>
      <TitleComponent />
      <Description />
      <ApiRequest />
      <Footer />
    </>
  );
}
