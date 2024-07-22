'use client';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Estrella } from '../interfaces/Interfacez';
import { registrarE } from '../firebase/Promesas';
import Menu from './Menu'; 

const initialStateEstrella: Estrella = {
  nombre: '',
  tipoEstrella: '',
  constelación: '',
  tamaño: '',
  descubridor: '',
  magnitud: 0,
  distancia: 0,
  edad: 0,
  descripcion: '',
  temperatura: ''
};

const StarForm = () => {
  const [estrella, setEstrella] = useState<Estrella>(initialStateEstrella);

  const handleChange = (name: keyof Estrella) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, type } = e.currentTarget;
    setEstrella(prevState => ({
      ...prevState,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleRadioChange = (value: string) => () => {
    setEstrella(prevState => ({
      ...prevState,
      tamaño: value
    }));
  };

  const registrar = () => {
    registrarE(estrella).then(() => {
      alert('Se ha registrado con éxito');
      setEstrella(initialStateEstrella); // Limpiar el formulario después del registro
    }).catch((e) => {
      alert('No se ha podido registrar');
      console.error(e);
    });
  };

  return (
    <div>
      <Menu /> {/* Incluye el nuevo menú */}

      <Form>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Nombre"
            value={estrella.nombre}
            onChange={handleChange('nombre')}
          />
        </Form.Group>

        <Button variant="success" onClick={registrar}>Registrar</Button>
      </Form>
    </div>
  );
};

export default StarForm;
