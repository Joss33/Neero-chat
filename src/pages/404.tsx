import Link from "next/link";

const Page404 = () => {
  return (
    <>
      <section className="bg-white dark:bg-zinc-700">
        <div className="py-8 px-4 mx-auto  lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600 dark:text-blue-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-zinc-700 md:text-4xl dark:text-white">Algo falta, algo está faltando.</p>
            <p className="mb-4 text-lg font-light text-zinc-500 dark:text-zinc-400">Lo sentimos, no podemos encontrar esa página. Encontrará mucho para explorar en la página de inicio. </p>
            <Link href="/" className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:focus:ring-blue-700 my-4">Volver al home</Link>
          </div>  
        </div>
      </section>
    </>
  );
};

export default Page404;