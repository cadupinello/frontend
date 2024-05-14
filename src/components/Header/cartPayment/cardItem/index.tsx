import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import { Product } from "@/types/product";
import { Close } from "@/icons/close";
import { VerticalRule } from "@/icons/vertical-rule";
interface CardItemProps {
  productsStorage: string | null;
}

const CardItem = ({ productsStorage }: CardItemProps) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (productsStorage) {
      setCartProducts(JSON.parse(productsStorage));
    }
  }, [productsStorage]);

  const handleUpdateQuantity = (product: Product, action: boolean) => {
    const newCartProducts = cartProducts.map((cartProduct: Product) => {
      if (cartProduct.id === product.id && action) {
        return { ...cartProduct, quantity: cartProduct.quantity + 1 };
      } else if (cartProduct.id === product.id && !action) {
        const newQuantity = Math.max(cartProduct.quantity - 1, 1);
        return { ...cartProduct, quantity: newQuantity };
      }

      return cartProduct;
    });
    
    setCartProducts(newCartProducts);
    localStorage.setItem("cartItems", JSON.stringify(newCartProducts));
  };
  

  return (
    <Styled.Container>
      {Array.isArray(cartProducts) &&
        cartProducts?.map((product: Product) => (
          <>
            <Styled.Card key={product.id}>
              <Styled.Image src={product.photo} alt={product.name} />
              <h3>{product.name}</h3>
              <Styled.QuantityControl>
                <span>Qtd:</span>
                <div>
                  <button onClick={() => handleUpdateQuantity(product, false)}>-</button>
                  <VerticalRule />
                  <p>{product.quantity}</p>
                  <VerticalRule />
                  <button onClick={() => handleUpdateQuantity(product, true)}>+</button>
                </div>
              </Styled.QuantityControl>
              <p>R$ {product.price}</p>
              <button className="close">
                <Close />
              </button>
            </Styled.Card>
          </>
        ))}
    </Styled.Container>
  );
};

export default CardItem;
