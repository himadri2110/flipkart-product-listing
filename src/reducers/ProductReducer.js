import data from "../data.json";

export const initialState = {
  products: data,
  sortByPrice: null,
  size: [],
  brand: [],
  gender: [],
};

export const ProductReducer = (state, { payload, type }) => {
  switch (type) {
    case "SORT_BY_PRICE":
      return { ...state, sortByPrice: payload };

    case "FILTER_BY_SIZE":
      return state.size.includes(payload)
        ? { ...state, size: [...state.size].filter((size) => size !== payload) }
        : { ...state, size: [...state.size, payload] };

    case "FILTER_BY_GENDER":
      return state.gender.includes(payload)
        ? {
            ...state,
            gender: [...state.gender].filter((gender) => gender !== payload),
          }
        : { ...state, gender: [...state.gender, payload] };

    case "FILTER_BY_BRAND":
      return state.brand.includes(payload)
        ? {
            ...state,
            brand: [...state.brand].filter((brand) => brand !== payload),
          }
        : { ...state, brand: [...state.brand, payload] };

    case "CLEAR_FILTERS":
      return { ...initialState };

    default:
      return state;
  }
};
