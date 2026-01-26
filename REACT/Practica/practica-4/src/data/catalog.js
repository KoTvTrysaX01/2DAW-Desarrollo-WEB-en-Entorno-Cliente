
import crimen_y_castigo from '../assets/crimen-y-castigo.jpg';
import fahrenheit_451 from '../assets/fahrenheit-451.jpg';
import harry_potter_y_la_piedra_filosofal from '../assets/harry-potter-y-la-piedra-filosofal.jpg'
import javascript_the_good_parts from '../assets/javascript-the-good-parts.jpg';
import la_vuelta_al_mundo_en_80_dias from '../assets/la-vuelta-al-mundo-en-80-dias.jpg';
import no_tengo_boca_y_debo_gritar from '../assets/no-tengo-boca-y-debo-gritar.jpg';

export const catalog = [
  { id: 'hr-001', nombre: 'Harry Potter y La Piedra Filosofal', autor: 'J. K. Rowling', precio: 37.95, enStock: false, imagen: harry_potter_y_la_piedra_filosofal },
  { id: 'vm-080', nombre: 'La vuelta al mundo en ochenta días', autor: 'Julio Verne', precio: 11.35, enStock: true, imagen: la_vuelta_al_mundo_en_80_dias },
  { id: 'nb-001', nombre: 'No tengo boca y debo gritar', autor: 'Harlan Ellison', precio: 14.37, enStock: false, imagen: no_tengo_boca_y_debo_gritar },
  { id: 'cc-001', nombre: 'Crimen y castigo', autor: 'Fiódor Dostoyevski', precio: 20.85, enStock: true, imagen: crimen_y_castigo },
  { id: 'fr-451', nombre: 'Fahrenheit 451', autor: 'Ray Bradbury', precio: 8.60, enStock: true, imagen: fahrenheit_451 },
  { id: 'js-001', nombre: 'JavaScript: The Good Parts', autor: 'Douglas Crockford', precio: 24.39, enStock: true, imagen: javascript_the_good_parts },
]; 
