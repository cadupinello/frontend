"use client";
import React from "react";
import * as Styled from "./styled";
import { Close } from "@/icons/close";
import CardItem from "./cardItem";
import { Product } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const variants = {
  open: { opacity: 1, x: "0" },
  closed: { opacity: 0, y: "-100%" },
};

const CartPayment = ({ isOpen, setIsOpen }: HeaderProps) => {
  const productsStorage = localStorage.getItem("cartItems") || "[]";

  const handleAmountPriceCart = () => {
    if (productsStorage) {
      const products = JSON.parse(productsStorage) || [];
      let amount = 0;
      products?.forEach((product: Product) => {
        amount += product.price * product?.quantity;
      });
      return formatPrice(amount);
    } 
  };

  return (
    <Styled.Container isOpen={isOpen}>
      <Styled.MotionContainer
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <div>
          <h1>Carrinho de compras</h1>
          <button
            type="button"
            className="closeCart"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <Close />
          </button>
        </div>
        <CardItem productsStorage={productsStorage} />
        <div className="totalPrice">
          <p>Total:</p>
          <p>{handleAmountPriceCart()}</p>
        </div>
        <Styled.ButtonFinalize>Finalizar compra</Styled.ButtonFinalize>
      </Styled.MotionContainer>
    </Styled.Container>
  );
};

export default CartPayment;
