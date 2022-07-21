import instance from "./instance";

export const getCates = () => {
  const url = "/category";
  return instance.get(url);
};

export const getCateFilter = (id: number) => {
  const url = `/category/${id}?_embed=products`;
  return instance.get(url);
};
