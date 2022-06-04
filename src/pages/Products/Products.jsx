import { ProductFilters } from "../../components/ProductFilters/ProductFilters";
import { ProductListing } from "../../components/ProductListing/ProductListing";

export const Products = () => {
  return (
    <div className="h-full grid grid-cols-[1fr_3fr] gap-8">
      <ProductFilters />
      <ProductListing />
    </div>
  );
};
