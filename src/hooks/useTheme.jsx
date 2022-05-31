import { useContext } from 'react';
import { ThemeContext } from '@providers/ThemeProvider';

const UseTheme = () => {
  return useContext(ThemeContext);
};

export default UseTheme;
