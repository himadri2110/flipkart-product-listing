import { useProducts } from "../../contexts/ProductContext";
import { ProductCard } from "./../ProductCard/ProductCard";
import { sortBy } from "../../utils/sortBy";
import { filterBy } from "../../utils/filterBy";
import data from "../../data.json";

export const ProductListing = () => {
  const {
    state: { products, sortByPrice, size, gender, brand },
  } = useProducts();

  const sortedProducts = sortBy(products, sortByPrice);
  const filteredBySize = filterBy(sortedProducts, size, "size");
  const filterByGender = filterBy(filteredBySize, gender, "gender");
  const filteredByBrand = filterBy(filterByGender, brand, "brand");

  const finalFilteredProducts = filteredByBrand;

  console.log(gender);
  return (
    <div>
      {finalFilteredProducts.length ? (
        <>
          <div className="text-xl font-bold mb-4">
            Showing {finalFilteredProducts.length} of {data.length} products
          </div>

          <div className="grid grid-cols-3 gap-4">
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
