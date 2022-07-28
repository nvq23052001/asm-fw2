import instance from "./instance";

export const getAll = () => {
  const url = "/products";
  return instance.get(url);
};
export const getOnce = (id: number) => {
  const url = `/products/${id}`;
  return instance.get(url);
};

export const createProduct = (data: any) => {
  const url = "/products";
  return instance.post(url, data);
};

export const updateProduct = (data: any, id: any) => {
  const url = `/products/${id}`;
  return instance.put(url, data);
};
export const deleteProduct = (id: any) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
