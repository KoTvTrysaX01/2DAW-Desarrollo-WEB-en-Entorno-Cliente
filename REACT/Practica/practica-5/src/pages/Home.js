import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <section className="container py-4">
        <h1>Tienda de Libros</h1>
        <p>Explora el catálogo en la sección Biblioteca.</p>
        <p>Para cambiar el directorio, inicie sesión como administrador</p>
      </section>
      <Hero/>
    </>
  );
}
