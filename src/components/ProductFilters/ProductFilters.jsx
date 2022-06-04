import { useProducts } from "../../contexts/ProductContext";

export const ProductFilters = () => {
  const { state, dispatch } = useProducts();

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div className="text-xl font-bold">Filters</div>

        <button
          className="underline"
          onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
        >
          Clear
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="text-lg">Price</div>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="radio"
              name="price"
              checked={state.sortByPrice === "HIGH_TO_LOW"}
              onChange={() =>
                dispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" })
              }
            />
            High to Low
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="radio"
              name="price"
              checked={state.sortByPrice === "LOW_TO_HIGH"}
              onChange={() =>
                dispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" })
              }
            />
            Low to High
          </label>
        </div>

        <hr />

        <div className="flex flex-col">
          <div className="text-lg">Size</div>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={state.size.includes("S")}
              onChange={() =>
                dispatch({ type: "FILTER_BY_SIZE", payload: "S" })
              }
            />
            S
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={state.size.includes("M")}
              onChange={() =>
                dispatch({ type: "FILTER_BY_SIZE", payload: "M" })
              }
            />
            M
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={state.size.includes("L")}
              onChange={() =>
                dispatch({ type: "FILTER_BY_SIZE", payload: "L" })
              }
            />
            L
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={state.size.includes("XL")}
              onChange={() =>
                dispatch({ type: "FILTER_BY_SIZE", payload: "XL" })
              }
            />
            XL
          </label>
        </div>

        <hr />

        <div className="flex flex-col">
          <div className="text-lg">Gender</div>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={state.gender.includes("Male")}
              onChange={() =>
                dispatch({ type: "FILTER_BY_GENDER", payload: "Male" })
              }
            />
            Male
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={state.gender.includes("Female")}
              onChange={() =>
                dispatch({ type: "FILTER_BY_GENDER", payload: "Female" })
              }
            />
            Female
          </label>
        </div>

        <hr />

        <div className="flex flex-col">
          <div className="text-lg">Brand</div>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={state.brand.includes("Adidas")}
              onChange={() =>
                dispatch({ type: "FILTER_BY_BRAND", payload: "Adidas" })
              }
            />
            Adidas
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={state.brand.includes("Nike")}
              onChange={() =>
                dispatch({ type: "FILTER_BY_BRAND", payload: "Nike" })
              }
            />
            Nike
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={state.brand.includes("Rebound")}
              onChange={() =>
                dispatch({ type: "FILTER_BY_BRAND", payload: "Rebound" })
              }
            />
            Rebound
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={state.brand.includes("Eyebogler")}
              onChange={() =>
                dispatch({ type: "FILTER_BY_BRAND", payload: "Eyebogler" })
              }
            />
            Eyebogler
          </label>
        </div>
      </div>
    </div>
  );
};
