import React, { createContext, useContext, useState } from 'react';

export const StoreContext = createContext(undefined);

export const useAmazonsStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {
  const [legendforgeNotificationsEnabled, setLegendforgeNotificationsEnabled] =
    useState(false);
  const [legendforgeSoundEnabled, setLegendforgeSoundEnabled] = useState(false);

  const contextValues = {
    legendforgeNotificationsEnabled,
    setLegendforgeNotificationsEnabled,
    legendforgeSoundEnabled,
    setLegendforgeSoundEnabled,
  };

  return (
    <StoreContext.Provider value={contextValues}>
      {children}
    </StoreContext.Provider>
  );
};
