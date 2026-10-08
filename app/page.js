"use client";
import React from 'react';
import ApiRequest from './services/page';
import TitleComponent from './components/TitleComponent'

export default function Home() {
  return (
    <>
      <ApiRequest />
    </>
  );
}
