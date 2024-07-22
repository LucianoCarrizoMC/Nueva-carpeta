'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (usuario === 'admin' && contraseña === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('../Menu');
      
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h1>Inicio de Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Ingrese su usuario"
          />
        </div>
        <div>
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="Ingrese su contraseña"
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
