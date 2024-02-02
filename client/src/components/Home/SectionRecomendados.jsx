import React from 'react';
import { CardRecomendados } from '../CardRecomendados';

export default function SectionRecomendados() {
  return (
    <section className="w-11/12 mx-auto">
      <h2 className="text-xl font-semibold my-6">Recommended items</h2>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(10rem,1fr))] gap-2 md:gap-5 md:grid-cols-5">
        <CardRecomendados />
        <CardRecomendados />
        <CardRecomendados />
        <CardRecomendados />
        <CardRecomendados />
        <CardRecomendados />
        <CardRecomendados />
        <CardRecomendados />
        <CardRecomendados />
        <CardRecomendados />
      </div>
    </section>
  );
}
