"use client";
import ProductCard from "../ProductCard";
import * as Styled from "./styled";
import { useProducts } from "@/hooks/useProducts";


const ProductList = () => {
  const { products, error, isLoading } = useProducts();
  return (
    <Styled.Container>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          photo={product.photo}
          brand={product.brand}
          description={product.description ?? ""}
        />
      ))}
    </Styled.Container>
  );
};

export default ProductList;
