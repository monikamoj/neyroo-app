import Image from "next/image";

export const ProductCard = ({ product }) => {
  return (
    <div>
      <Image src={product.image} height={100} width={120} />
      <h4>{product.module}</h4>
      <h4>{product.features}</h4>
      <h4>{product.duration}</h4>
      <p>$ {product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};


