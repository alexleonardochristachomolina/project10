import React from 'react';
import { CardRecomendados } from '../CardRecomendados';

export default function SectionRecomendados() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">Recommended items</h2>
      <div className="flex justify-center flex-wrap gap-5">
        <CardRecomendados />
        <CardRecomendados />
        <CardRecomendados />
        <CardRecomendados />
        <CardRecomendados />
      </div>
    </section>
  );
}
