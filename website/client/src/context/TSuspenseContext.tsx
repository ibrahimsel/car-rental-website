import React, { useContext } from "react";
export const TSuspenseContext = React.createContext({
  loading: false,
  disabled: false,
  tomSuspense: (value: boolean = false) => {},
  setDisabled: (value: boolean = false) => {},
  setLoading: (value: boolean = false) => {},
});
export const useTomSuspense = () => useContext(TSuspenseContext);
