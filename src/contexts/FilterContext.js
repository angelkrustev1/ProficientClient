import { createContext } from "react";

export const FilterContext = createContext({
  filters: {},
  setFilterHandler: () => {},
  resetFiltersHandler: () => {},
  removeFilterHandler: () => {},
});
