export const sortBy = (products, sortBy) => {
  if (sortBy === "LOW_TO_HIGH") {
    return [...products].sort((item1, item2) => item1.price - item2.price);
  } else if (sortBy === "HIGH_TO_LOW") {
    return [...products].sort((item1, item2) => item2.price - item1.price);
  }

  return products;
};
