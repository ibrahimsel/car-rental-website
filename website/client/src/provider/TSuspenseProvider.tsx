import { useState } from "react";
import { TLoading } from "../components/TLoading";
import { TSuspenseContext } from "../context";

interface ITSuspenseProvider {
  children?: React.ReactNode;
}

export function TSuspenseProvider(props: ITSuspenseProvider) {
  const { children } = props;
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  return (
    <TSuspenseContext.Provider
      value={{
        loading: loading,
        disabled: disabled,
        tomSuspense: (value: boolean = false) => {
          setLoading(value);
          setDisabled(value);
        },
        setDisabled: (value: boolean = false) => setDisabled(value),
        setLoading: (value: boolean = false) => setLoading(value),
      }}
    >
      <>
        {loading && <TLoading />}
        {children}
      </>
    </TSuspenseContext.Provider>
  );
}
