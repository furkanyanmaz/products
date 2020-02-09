import React from "react";
import ProductList from "./product/productList";
import FilterPages from "./filter/filterPages";

const App   = () => {
    return(
        <div>
            <FilterPages />
            <br/><br/><br/><hr/><br/><br/><br/>
            <ProductList />
        </div>
    )
};

export default App;