"use client";
import React from 'react';
import ApiRequest from './services/page';
import TitleComponent from './components/TitleComponent'
import Description from './components/Description';

// Página inicial
export default function Home() {
  return (
    <>
      <TitleComponent />
      <Description />
      <ApiRequest />
    </>
  );
}
