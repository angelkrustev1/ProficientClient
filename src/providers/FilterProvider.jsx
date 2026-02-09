import { useState } from "react";
import { FilterContext } from "../contexts/FilterContext";

export default function FilterProvider({ children }) {
  const [filters, setFiltersState] = useState({
    class: null,
    subject: null,
    type: null,
  });

  const setFilter = (key, value) => {
    setFiltersState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const removeFilter = (key) => {
    setFiltersState((prev) => ({
      ...prev,
      [key]: null,
    }));
  };

  const resetFilters = () => {
    setFiltersState((prev) =>
      Object.fromEntries(Object.keys(prev).map((k) => [k, null]))
    );
  };

  return (
    <FilterContext.Provider
      value={{ filters, setFilter, resetFilters, removeFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
}
