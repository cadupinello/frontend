import { useQuery } from "@tanstack/react-query";
import { ProductsResponse } from '../types/productsResponse';
import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1";

const fetcher = () => axios.get<ProductsResponse>(`${BASE_URL}/products?page=1&rows=8&sortBy=id&orderBy=DESC`);

export function useProducts() {
  const { data, error, isLoading } = useQuery<AxiosResponse<ProductsResponse>>(["products"], fetcher);

  const products = data?.data?.products;

  return { products, error, isLoading };
}
