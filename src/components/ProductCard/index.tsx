import { useCallback, useState } from 'react'; // Importe o useState para lidar com o estado local
import { formatPrice } from "@/utils/formatPrice";
import * as Styled from "./styled";
import { limitText } from '@/utils/limitText';
import { useCart } from '@/context/cartContext';
import { ShoppingBag } from '@/icons/shopping-bag';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  photo: string;
  brand: string;
  description: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  photo: string;
  brand: string;
  quantity: number;
}

const ProductCard = ({
  id,
  name,
  price,
  photo,
  brand,
  description,
}: ProductCardProps) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    const addProduct = { id, name, price, photo, brand, quantity: 1 };
    addToCart(addProduct);
  };

  return (
    <Styled.Card>
      <Styled.Image src={photo} alt={name} />
      <div>
        <p>{name}</p>
        <span>{formatPrice(price)}</span>
      </div>
      <p>{limitText(description, 70)}</p>
      <button type="button" onClick={handleAddToCart}>
        <ShoppingBag />
        Comprar
      </button>
    </Styled.Card>
  );
};

export default ProductCard;
