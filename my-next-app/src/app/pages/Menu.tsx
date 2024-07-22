'use client';
import React from 'react';
import Link from 'next/link';

const Menu = () => {
  return (
    <div>
      <h1>Menú Principal</h1>
      <nav>
        <Link href="/Formulario">Ir al Formulario</Link>
        <br />
        <Link href="/">Volver a la Página de Inicio</Link>
      </nav>
    </div>
  );
};

export default Menu;
