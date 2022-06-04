import { useProducts } from "../../contexts/ProductContext";
import { ProductCard } from "./../ProductCard/ProductCard";
import { sortBy } from "../../utils/sortBy";
import { filterBy } from "../../utils/filterBy";
import { filterBySize } from "../../utils/filterBySize";
import data from "../../data.json";

export const ProductListing = () => {
  const {
    state: { products, sortByPrice, size, gender, brand },
  } = useProducts();

  const sortedProducts = sortBy(products, sortByPrice);
  const filteredByBrand = filterBy(sortedProducts, brand, "brand");
  const filterByGender = filterBy(filteredByBrand, gender, "gender");
  const filteredBySize = filterBySize(filterByGender, size);

  const finalFilteredProducts = filteredBySize;

  return (
    <div>
      {finalFilteredProducts.length ? (
        <>
          <div className="text-xl font-bold mb-4">
            Showing {finalFilteredProducts.length} of {data.length} products
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {finalFilteredProducts?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};
