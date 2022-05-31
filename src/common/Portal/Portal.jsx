import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children, active }) => {
  const [container] = useState(document.createElement('div'));

  useEffect(() => {
    if (active) {
      document.body.appendChild(container);
    } else {
      container.remove();
    }
  }, [active]);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
