import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from './Firebase';
import { Estrella } from '../interfaces/Interfacez';

export const registrarE = async (estrella: Estrella) => {
  try {
    await addDoc(collection(db, 'estrellas'), estrella);
  } catch (error) {
    console.error("Error al registrar estrella:", error);
  }
};

export const obtenerEstrellas = async (): Promise<Estrella[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'estrellas'));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Estrella));
  } catch (error) {
    console.error("Error al obtener estrellas:", error);
    return [];
  }
};

export const editarE = async (estrella: Estrella, id: string) => {
  const estrellaRef = doc(db, 'estrellas', id);
  try {
    await updateDoc(estrellaRef, estrella);
  } catch (error) {
    console.error("Error al editar estrella:", error);
  }
};

export const borrarE = async (id: string) => {
  const estrellaRef = doc(db, 'estrellas', id);
  try {
    await deleteDoc(estrellaRef);
  } catch (error) {
    console.error("Error al borrar estrella:", error);
  }
};
