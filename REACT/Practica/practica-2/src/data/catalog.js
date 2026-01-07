import ubuntu from '../assets/ubuntu.png';
import arch from '../assets/arch.png';
import mint from '../assets/mint.png';
import popos from '../assets/popos.png';
import debian from '../assets/debian.png';
import fedora from '../assets/fedora.png';
import React, { createContext } from 'react';

export const CatalogContext = createContext();

const CatalogProvider = ({ children }) => {
  const catalog = [
    { imagen: ubuntu, nombre: 'Ubuntu', tamano: 25, facilUsar: true},
    { imagen: arch, nombre: 'Arch', tamano: 8, facilUsar: false},
    { imagen: debian, nombre: 'Debian', tamano: 10, facilUsar: false},
    { imagen: mint, nombre: 'Mint', tamano: 15, facilUsar: true},
    { imagen: fedora, nombre: 'Fedora', tamano: 10, facilUsar: false},
    { imagen: popos, nombre: 'Pop!_OS', tamano: 16, facilUsar: true}
  ];
  return (
    <CatalogContext.Provider value={{ catalog }}>
      {children}
    </CatalogContext.Provider>
  );
};


export default CatalogProvider;