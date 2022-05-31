import { useEffect, useState } from 'react';

const UseData = (requestWithMethod) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    requestWithMethod().then((response) => {
      setData(response.data);
    });
  }, []);
  return data;
};

export default UseData;
