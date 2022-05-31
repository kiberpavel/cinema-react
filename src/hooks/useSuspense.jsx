import React, { Suspense } from 'react';

const UseSuspense = (Component) => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Component />
    </Suspense>
  );
};

export default UseSuspense;
