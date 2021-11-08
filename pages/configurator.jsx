import Head from "next/head";
import { LogoImage } from "../src/components/Header/Logo";
import { NavBar } from "../src/components/Nav/NavBar";
import { ProductCard } from "../src/components/ProductCard";
import { getProducts } from "./api/products/index";

const Configurator = ({ products }) => {
  return (
    <>
      <Head>
        <title>Configurator</title>
      </Head>
      <LogoImage />
      <NavBar />
      <h2>Corporate Campus Configurator</h2>
      <h3>All Modules</h3>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Configurator;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
