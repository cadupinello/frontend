"use client";
import * as Styled from "./styled";
import { CartIcon } from "@/icons/cart-icon";
import { useCart } from "@/context/cartContext";
import { useState } from "react";
import CartPayment from "./cartPayment";

interface HeaderProps {
  isOpen: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Styled.Header>
        <div>
          <strong>MKS</strong> <span>Sistemas</span>
        </div>
        <div>
          <Styled.Cart type="button" onClick={handleOpenCart}>
            <CartIcon /> <span>{cart.length > 0 && cart.length}</span>
          </Styled.Cart>
        </div>
      </Styled.Header>
      <CartPayment isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
