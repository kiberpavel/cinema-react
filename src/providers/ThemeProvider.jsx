import React, { createContext, useMemo, useState } from 'react';
import { shape } from 'prop-types';

export const ThemeContext = createContext({ isDark: false });

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: shape({}).isRequired,
};
