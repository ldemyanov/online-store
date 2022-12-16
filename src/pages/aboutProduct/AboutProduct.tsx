import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function AboutProduct() {
  const query = useQuery();
  const params = query.entries();
  for (const [key, value] of params) {
    console.log(key, value);
  }
  return <div>Product</div>;
}

export default AboutProduct;
