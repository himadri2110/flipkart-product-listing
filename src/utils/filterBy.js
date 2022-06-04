export const filterBy = (products, filters, filterBy) => {
  if (filters.length) {
    return [...products].filter((product) =>
      filters.includes(product[filterBy])
    );
  }
  return products;
};
