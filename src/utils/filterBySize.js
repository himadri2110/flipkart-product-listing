export const filterBySize = (products, sizes) => {
  const finalArr = [];

  if (sizes.length) {
    for (let product of products) {
      for (let size of sizes) {
        const foundInArr = finalArr.find((item) => item.id === product.id);

        if (product.size.includes(size) && !foundInArr) {
          finalArr.push(product);
        }
      }
    }

    return finalArr;
  }

  return products;
};
