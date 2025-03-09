
import React, { createContext, useContext } from 'react';

interface ThemeContextType {
  // Empty interface since we're removing theme functionality
}

const ThemeContext = createContext<ThemeContextType>({});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
