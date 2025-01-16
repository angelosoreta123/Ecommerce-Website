import products from "../data/products";

export const filterCategory = ({ category }: { category: string }) =>
  products.filter((product) => product.category === category);

export const filterSubCategory = ({ subCategory }: { subCategory: string }) =>
  products.filter((product) => product.subCategory === subCategory);