import axios from "axios";

const clinet = axios.create({
  baseURL: "http://localhost:3001",
});

export async function getProducts() {
  const res = await clinet("/products");
  return res.data;
}

export async function getProduct(id:number|string) {
  const res=await clinet(`/products/${id}`)
  return res.data
}
