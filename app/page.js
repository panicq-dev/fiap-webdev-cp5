"use client";
import React from 'react';
import ApiRequest from './services/page';
import TitleComponent from './components/TitleComponent'
import Description from './components/Description';

export default function Home() {
  return (
    <>
      <TitleComponent />
      <Description />
      <ApiRequest />
    </>
  );
}
