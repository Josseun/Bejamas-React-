import React from "react";

function ProductList({ ItemList }) {
  return (
    <div className="grid lg:grid-cols-3 lg:grid-rows-2 ssm:grid-cols-1">
      {ItemList}
    </div>
  );
}

export default ProductList;
