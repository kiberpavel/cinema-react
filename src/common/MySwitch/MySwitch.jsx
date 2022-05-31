import React from 'react';
import classNames from 'classnames';
import useTheme from '@hooks/useTheme';

const MySwitch = () => {
  const [checked, setChecked] = React.useState(false);
  const { isDark, setIsDark } = useTheme();

  const toggleChecked = () => {
    setChecked(!checked);
    setIsDark(!isDark);
  };

  return (
    <button
      className={classNames(
        'switcher',
        { 'switcher-dark': isDark },
        { 'switcher-light': !isDark },
      )}
      type="button"
      onClick={toggleChecked}
    >
      Change theme
    </button>
  );
};

export default MySwitch;
