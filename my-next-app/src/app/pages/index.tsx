// src/app/pages/index.tsx

import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la Página de Inicio</h1>
      <nav>
        <Link href="/Login">Ir al Login</Link>
        <br />
        <Link href="/Menu">Ir al Menú</Link>
      </nav>
    </div>
  );
};

export default Home;
